module.exports = {
  root: true,
  extends: ['viceverse'],
  ignorePatterns: ['dist', 'node_modules', '.next', '.cache'],
  env: {
    node: true,
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
