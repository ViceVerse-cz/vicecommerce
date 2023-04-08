<h1>Medusa Cloudflare R2 Plugin Documentation</h1>
The Medusa Cloudflare R2 plugin is a simple and easy-to-use plugin that allows you to use Cloudflare R2 as the storage provider for Medusa.
<h2>Table of Contents</h2><ol><li><a href="#installation" target="_new">Installation</a></li><li><a href="#configuration" target="_new">Configuration</a></li><li><a href="#obtaining-credentials" target="_new">Obtaining Credentials</a></li><li><a href="#usage" target="_new">Usage</a></li><li><a href="#credits" target="_new">Credits</a></li></ol><h2>Installation</h2>
To get started with the Medusa Cloudflare R2 plugin, you will first need to install the package using npm:

```bash
npm i @vicecommerce/medusa-file-r2
```

<h2>Configuration</h2>
After installing the plugin, you need to configure it in your Medusa project. You can do this by adding the following object to the  `medusa-config.js`  file:

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

Make sure to replace the values in the `options` object with the appropriate
environment variables containing your Cloudflare R2 credentials.

<h2>Obtaining Credentials</h2>
To use the Medusa Cloudflare R2 plugin, you will need the following credentials:
<ol><li>Account ID</li><li>Bucket Name</li><li>Public URL</li><li>Access Key ID</li><li>Secret Access Key</li></ol>
You can obtain these credentials by logging into your Cloudflare account and navigating to the R2 Storage section. If you do not already have a Cloudflare account, you will need to sign up for one.

For detailed instructions on obtaining your Cloudflare R2 credentials, please
refer to the official
<a href="https://developers.cloudflare.com/r2/get-started" target="_new">Cloudflare
R2 documentation</a>.

<img src="https://user-images.githubusercontent.com/67194087/230713938-61084b23-f42e-45bf-afd1-7073259309d1.jpg" alt="example env">

<h2>Usage</h2>
Once you have installed and configured the plugin, you can use it to store files with Medusa. The plugin will automatically handle uploading and deleting files on your Cloudflare R2 storage.

For example, when using Medusa to manage product images, the images will be
uploaded to your specified Cloudflare R2 bucket.


<h2>Credits</h2>
The Medusa Cloudflare R2 plugin is based on the original work by <a href="https://github.com/contrebande-labs/medusa-file-cloudflare-r2" target="_new">contrebande-labs</a>.
