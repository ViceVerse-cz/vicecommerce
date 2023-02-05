const dotenv = require('dotenv')

try {
  dotenv.config({ path: process.cwd() + '/' + '.env' });
} catch (e) {
  console.error(`Failed to load environment variables: ${e}`);
}

// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/medusa-docker";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  {
    resolve: 'medusa-fulfillment-manual'
  },
  {
    resolve: 'medusa-payment-manual'
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-file-minio
  {
    resolve: 'medusa-file-minio',
    options: {
      private_bucket: process.env.MINIO_PRIVATE_BUCKET,
      root_user: process.env.MINIO_ROOT_USER,
      root_password: process.env.MINIO_ROOT_PASSWORD
    }
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-meilisearch
  {
    resolve: 'medusa-plugin-meilisearch',
    options: {
      config: {
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILISEARCH_API_KEY,
      },
      settings: {
        products: {
          searchableAttributes: ["title", "description", "variant_sku"],
          displayedAttributes: [
            "title", 
            "description", 
            "variant_sku", 
            "thumbnail", 
            "handle",
          ],
        },
      }
    }
  },

  // Docs: https://github.com/medusajs/medusa/tree/master/packages/medusa-plugin-sendgrid
  {
    resolve: 'medusa-plugin-sendgrid',
    options: {
      api_key: process.env.MAIL_API_KEY,
      from: process.env.MAIL_FROM
    }
  }
];

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
