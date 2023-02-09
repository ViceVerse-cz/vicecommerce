const { withStoreConfig } = require("./store-config");
const store = require("./store.config.json");
const path = require("path");

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,

  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "viceversetest.s3.amazonaws.com"],
  },

  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["@tanstack/react-query", ...config.externals];
    }

    const reactQuery = path.resolve(require.resolve("@tanstack/react-query"));
    config.resolve.alias["@tanstack/react-query"] = reactQuery;

    return config;
  },
});
