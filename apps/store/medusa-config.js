require("dotenv");

// CORS when consuming Medusa from admin
const ADMIN_CORS = "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL = process.env.DATABASE_URL;

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = "redis://localhost:6379";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  {
    resolve: "medusa-fulfillment-manual",
  },

  {
    resolve: "medusa-payment-manual",
  },

  // Docs: WIP
  {
    resolve: "medusa-fulfillment-zasilkovna",
    options: {
      apiKey: "sdfsdfdsfdsf",
    },
  },

  // Docs: WIP
  {
    resolve: "medusa-fulfillment-ceskaposta",
    options: {
      apiKey: "b79b16c2-2f77-450f-91a5-868c3c698a82",
      secretKey: "dOJWwjp+BWqUcof3K+3OW6XGTnEpmWerx64TCNk0+0pZnonHdN99NFRIGaJSX0/HTtiu6AGYpKp0mjguzqp+wg==",
    },
  },

  // Docs: https://docs.medusajs.com/add-plugins/contentful/
  {
    resolve: "medusa-plugin-contentful",
    options: {
      space_id: process.env.CONTENTFUL_SPACE_ID,
      access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENV,
    },
  },

  // Docs: https://docs.medusajs.com/add-plugins/s3
  {
    resolve: "medusa-file-s3",
    options: {
      s3_url: process.env.S3_URL,
      bucket: process.env.S3_BUCKET,
      region: process.env.S3_REGION,
      access_key_id: process.env.S3_ACCESS_KEY_ID,
      secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
    },
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-meilisearch
  {
    resolve: "medusa-plugin-meilisearch",
    options: {
      config: {
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILI_MASTER_KEY,
      },
      settings: {
        products: {
          searchableAttributes: ["title", "description", "variant_sku"],
          displayedAttributes: ["title", "description", "variant_sku", "thumbnail", "handle"],
        },
      },
    },
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-sendgrid
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
    port: 9000,
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
