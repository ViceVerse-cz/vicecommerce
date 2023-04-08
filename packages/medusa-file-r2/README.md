A simple plugin to use Cloudflare R2 as the storage provider for Medusa.

```
npm i @vicecommerce/medusa-file-cloudflare-r2
```

```javascript
{
  resolve: "medusa-file-cloudflare-r2",
  options: {
    public_url: process.env.R2_PUBLIC_URL,
    s3_endpoint: process.env.R2_S3_ENDPOINT,
    bucket: process.env.R2_BUCKET_NAME,
    access_key_id: process.env.R2_ACCESS_KEY,
    secret_access_key: process.env.R2_SECRET_KEY,
  },
}
```

### credits:
https://github.com/contrebande-labs/medusa-file-cloudflare-r2