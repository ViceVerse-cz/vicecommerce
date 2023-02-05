/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv');

// CORS when consuming Medusa from admin
const ADMIN_CORS = 'http://localhost:7000,http://localhost:7001';

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = 'http://localhost:8000';

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/medusa-docker';

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = 'redis://localhost:6379';

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  {
    resolve: 'medusa-fulfillment-manual',
  },
  {
    resolve: 'medusa-payment-manual',
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-file-minio
  // {
  //   resolve: 'medusa-file-minio',
  //   options: {
  //     endpoint: process.env.MINIO_ENDPOINT,
  //     bucket: process.env.MINIO_BUCKET,
  //     access_key_id: process.env.MINIO_ACCESS_KEY,
  //     secret_access_key: process.env.MINIO_SECRET_KEY,
  //   },
  // },

  // // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-meilisearch
  {
    resolve: 'medusa-plugin-meilisearch',
    options: {
      config: {
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILI_MASTER_KEY,
      },
      settings: {
        products: {
          searchableAttributes: ['title', 'description', 'variant_sku'],
          displayedAttributes: ['title', 'description', 'variant_sku', 'thumbnail', 'handle'],
        },
      },
    },
  },

  // // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-sendgrid
  // {
  //   resolve: 'medusa-plugin-sendgrid',
  //   options: {
  //     api_key: process.env.MAIL_API_KEY,
  //     from: process.env.MAIL_FROM
  //   }
  // }
];

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: 'postgres',
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
