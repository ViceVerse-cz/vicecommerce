import fs from "fs";
import s3 from "aws-sdk/clients/s3";
import { parse } from "path";
import {
  AbstractFileService,
  DeleteFileType,
  FileServiceUploadResult,
  GetUploadedFileType,
  UploadStreamDescriptorType,
} from "@medusajs/medusa";
import stream from "stream";

interface Options {
  bucket: string;
  public_url: string;
  access_key_id: string;
  secret_access_key: string;
  account_id: string;
}

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}

export default class CloudflareR2Service extends AbstractFileService {
  private client: s3;

  bucket_: string;
  public_url_: string;
  accessKeyId_: string;
  secretAccessKey_: string;
  s3Endpoint_: string;

  constructor(container, options: Options) {
    super(container);

    const { bucket, public_url, access_key_id, secret_access_key, account_id } = options;

    this.bucket_ = bucket;
    this.public_url_ = public_url;
    this.accessKeyId_ = access_key_id;
    this.secretAccessKey_ = secret_access_key;
    this.s3Endpoint_ = `https://${account_id}.r2.cloudflarestorage.com`;
    this.client = this.createClient();
  }

  createClient() {
    return new s3({
      signatureVersion: "v4",
      region: "auto",
      endpoint: this.s3Endpoint_,
      accessKeyId: this.accessKeyId_,
      secretAccessKey: this.secretAccessKey_,
    });
  }

  upload(fileData: MulterFile) {
    return this.uploadFile(fileData);
  }

  uploadProtected(fileData: MulterFile) {
    return this.uploadFile(fileData, { acl: "private" });
  }

  async uploadFile(fileData: MulterFile, options?: { isProtected?: boolean; acl?: string }) {
    const { path, originalname, mimetype: ContentType } = fileData;

    const parsedFilename = parse(originalname);
    const Key = `${parsedFilename.name}-${Date.now()}${parsedFilename.ext}`;

    const params: s3.PutObjectRequest = {
      ACL: options?.acl ?? (options?.isProtected ? "private" : "public-read"),
      Bucket: this.bucket_,
      Body: fs.createReadStream(path),
      ContentType,
      Key,
    };

    try {
      const { Key } = await this.client.upload(params).promise();

      const result: FileServiceUploadResult = {
        url: `${this.public_url_}/${Key}`,
      };

      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Unable to upload file");
    }
  }

  async delete(file: DeleteFileType) {
    const params: s3.DeleteObjectRequest = {
      Bucket: this.bucket_,
      Key: `${file}`,
    };

    await this.client.deleteObject(params).promise();
  }

  async getUploadStreamDescriptor(fileData: UploadStreamDescriptorType) {
    const pass = new stream.PassThrough();

    const fileKey = `${fileData.name}.${fileData.ext}`;

    const params: s3.PutObjectRequest = {
      ACL: fileData.acl ?? "private",
      Bucket: this.bucket_,
      Body: pass,
      Key: fileKey,
    };

    return {
      writeStream: pass,
      promise: this.client.upload(params).promise(),
      url: `${this.public_url_}/${fileKey}`,
      fileKey,
    };
  }

  async getDownloadStream(fileData: GetUploadedFileType) {
    const params: s3.GetObjectRequest = {
      Bucket: this.bucket_,
      Key: `${fileData.fileKey}`,
    };

    return this.client.getObject(params).createReadStream();
  }

  async getPresignedDownloadUrl(fileData: GetUploadedFileType) {
    const params = {
      Bucket: this.bucket_,
      Key: `${fileData.fileKey}`,
      Expires: 60,
    };

    return await this.client.getSignedUrlPromise("getObject", params);
  }
}
