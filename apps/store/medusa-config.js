require("dotenv");

// CORS when consuming Medusa from admin
const ADMIN_CORS = "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL = process.env.DATABASE_URL;

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = "redis://localhost:6379";

/**
 * {
      "name": "Zasilkovna - Box",
      "region_id": "test-region-eu",
      "provider_id": "zasilkovna-fulfillment",
      "data": {
        "id": "zasilkovna-box"
      },
      "price_type": "flat_rate",
      "is_return": false,
      "amount": 1000
    },
    {
      "name": "Zasilkovna - Delivery",
      "region_id": "test-region-eu",
      "provider_id": "zasilkovna-fulfillment",
      "data": {
        "id": "zasilkovna-delivery"
      },
      "price_type": "flat_rate",
      "is_return": false,
      "amount": 1000
    }
 */

// import { Cart, Data } from "@medusajs/medusa";
// import { FulfillmentService } from "medusa-interfaces"

// export default class ZasilkovnaFulfillment extends FulfillmentService {
//     static identifier = 'zasilkovna-fulfillment';

//     constructor() {
//         super();
//     }

//     override async getFulfillmentOptions() {
//         return [
//           {
//             id: "zasilkovna-box",
//             name: "Zasilkovna - Box",
//             is_return: false
//           },
//           {
//             id: "zasilkovna-delivery",
//             name: "Zasilkovna - Dobirka",
//             is_return: false
//           },
//         ]
//     }

//     override async validateOption(data: Data): Promise<boolean> {
//         return true;
//     }

//     override async validateFulfillmentData(
//         optionData,
//         data,
//         cart: Cart
//     ) {
//         return {
//           ...data,
//         }
//     }
// }

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  {
    resolve: "medusa-fulfillment-manual",
  },

  {
    resolve: "medusa-payment-manual",
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
