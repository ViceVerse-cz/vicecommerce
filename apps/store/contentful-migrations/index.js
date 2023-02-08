#! /usr/bin/env node

require("dotenv");
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

require("contentful-migration");
import { runMigration } from "contentful-migration";

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENV,
  yes: true,
};

const migrations = async () => {
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/link.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/hero.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/navigation-item.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/navigation-menu.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/product-variant.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/product.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/region.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/tile.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/tile-section.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/page.js` },
  });
};

migrations();
