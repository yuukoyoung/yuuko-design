module.exports = {
  root: true,
  extends: [
    require.resolve('./packages/eslint-config/src/index.cjs'),
    require.resolve('./packages/eslint-config/src/prettier.cjs'),
  ],
};
