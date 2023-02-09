function withStoreConfig(nextConfig = {}) {
  const features = nextConfig.features || {};
  nextConfig.features = undefined;

  nextConfig.env = nextConfig.env || {};

  Object.entries(features).forEach(([key, value]) => {
    if (value) {
      nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = true;
    }
  });

  return nextConfig;
}

module.exports = { withStoreConfig };
