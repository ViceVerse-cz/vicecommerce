import React, { useContext, useEffect, useState } from "react";

import { BatchJob } from "@medusajs/medusa";
import {
  useAdminBatchJob,
  useAdminCancelBatchJob,
  useAdminConfirmBatchJob,
  useAdminCreateBatchJob,
  useAdminDeleteFile,
  useAdminUploadProtectedFile,
} from "medusa-react";

import UploadModal from "../../../components/organisms/upload-modal";
import useNotification from "../../../hooks/use-notification";
import { PollingContext } from "../../../context/polling";

/**
 * Hook returns a batch job. The endpoint is polled every 2s while the job is processing.
 */
function useImportBatchJob(batchJobId?: string) {
  const [batchJob, setBatchJob] = useState<BatchJob>();

  const isBatchJobProcessing = batchJob?.status === "created" || batchJob?.status === "confirmed";

  const { batch_job } = useAdminBatchJob(batchJobId!, {
    enabled: !!batchJobId,
    refetchInterval: isBatchJobProcessing ? 2000 : false,
  });

  useEffect(() => {
    setBatchJob(batch_job);
  }, [batch_job]);

  return batchJob;
}

/**
 * Import products container interface.
 */
type ImportProductsProps = {
  handleClose: () => void;
};

/**
 * Product import modal container.
 */
function ImportProducts(props: ImportProductsProps) {
  const [fileKey, setFileKey] = useState();
  const [batchJobId, setBatchJobId] = useState();

  const notification = useNotification();

  const { resetInterval } = useContext(PollingContext);

  const { mutateAsync: deleteFile } = useAdminDeleteFile();
  const { mutateAsync: uploadFile } = useAdminUploadProtectedFile();

  const { mutateAsync: createBatchJob } = useAdminCreateBatchJob();
  const { mutateAsync: cancelBathJob } = useAdminCancelBatchJob(batchJobId!);
  const { mutateAsync: confirmBatchJob } = useAdminConfirmBatchJob(batchJobId!);

  const batchJob = useImportBatchJob(batchJobId);

  const isUploaded = !!fileKey;
  const isPreprocessed = !!batchJob?.result;
  const hasError = batchJob?.status === "failed";

  const progress = isPreprocessed ? batchJob!.result.advancement_count / batchJob!.result.count : undefined;

  const status = hasError
    ? "Při zpracování došlo k chybě"
    : isPreprocessed
    ? undefined
    : isUploaded
    ? "Předběžné zpracování..."
    : "Nahrávání...";

  /**
   * Confirm job on submit.
   */
  const onSubmit = async () => {
    await confirmBatchJob();
    notification(
      "Úspěch",
      "Import potvrzen ke zpracování. Informace o průběhu jsou k dispozici v zásuvce aktivity.",
      "success",
    );
    props.handleClose();
  };

  /**
   * Upload file and use returned file key to create a batch job.
   */
  const processUpload = async (file: File) => {
    try {
      const res = await uploadFile(file as any);
      const _fileKey = res.uploads[0].key;
      setFileKey(_fileKey);

      const batchJob = await createBatchJob({
        dry_run: true,
        context: { fileKey: _fileKey },
        type: "product-import",
      });

      resetInterval();

      setBatchJobId(batchJob.batch_job.id);
    } catch (e) {
      notification("Chyba", "Import se nezdařil.", "error");
      if (fileKey) {
        await deleteFile({ file_key: fileKey });
      }
    }
  };

  /**
   * Returns create/update counts from stat descriptor.
   */
  const getSummary = () => {
    if (!batchJob) {
      return undefined;
    }

    const res = batchJob.result?.stat_descriptors[0].message.match(/\d+/g);

    if (!res) {
      return undefined;
    }

    return {
      toCreate: Number(res[0]),
      toUpdate: Number(res[1]),
    };
  };

  /**
   * When file upload is removed, delete file from the bucket and cancel batch job.
   */
  const onFileRemove = async () => {
    if (fileKey) {
      try {
        deleteFile({ file_key: fileKey });
      } catch (e) {
        notification("Chyba", "Soubor CSV se nepodařilo odstranit", "error");
      }
    }

    try {
      cancelBathJob();
    } catch (e) {
      notification("Chyba", "Nepodařilo se zrušit dávkovou úlohu", "error");
    }

    setBatchJobId(undefined);
  };

  /**
   * Cleanup file if batch job isn't confirmed.
   */
  const onClose = () => {
    props.handleClose();
    if (!["confirmed", "completed", "canceled", "failed"].includes(batchJob?.status)) {
      if (fileKey) {
        deleteFile({ file_key: fileKey });
      }
      if (batchJobId) {
        cancelBathJob();
      }
    }
  };

  return (
    <UploadModal
      type='products'
      status={status}
      progress={progress}
      canImport={isPreprocessed}
      onSubmit={onSubmit}
      onClose={onClose}
      summary={getSummary()}
      onFileRemove={onFileRemove}
      processUpload={processUpload}
      fileTitle={"seznam produktů"}
      templateLink='/temp/product-import-template.csv'
      description2Title='Nejste si jisti, jak seznam uspořádat?'
      description2Text='Stáhněte si níže uvedenou šablonu, abyste se ujistili, že dodržujete správný formát.'
      description1Text='Prostřednictvím importů můžete přidávat nebo aktualizovat produkty. Chcete-li aktualizovat existující produkty/varianty, musíte nastavit existující id ve sloupcích Product/Variant id. Pokud hodnota není nastavena, vytvoří se nový záznam. Před importem produktů budete požádáni o potvrzení.'
    />
  );
}

export default ImportProducts;
