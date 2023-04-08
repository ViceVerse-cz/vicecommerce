A simple plugin to use Cloudflare R2 as the storage provider for Medusa.

```bash
npm i @vicecommerce/medusa-file-r2
```

```javascript
{
  resolve: "@vicecommerce/medusa-file-r2",
  options: {
    account_id: process.env.R2_ACCOUNT_ID,
    bucket: process.env.R2_BUCKET_NAME,
    public_url: process.env.R2_PUBLIC_URL,
    access_key_id: process.env.R2_ACCESS_KEY,
    secret_access_key: process.env.R2_SECRET_KEY,
  },
}
```

### example env:

![example env](https://user-images.githubusercontent.com/67194087/230713938-61084b23-f42e-45bf-afd1-7073259309d1.jpg)

### credits:

https://github.com/contrebande-labs/medusa-file-cloudflare-r2
