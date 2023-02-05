module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@vicecommerce/eslint-config-custom"],
  ignorePatterns: ["dist", "node_modules", ".next", ".cache"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
