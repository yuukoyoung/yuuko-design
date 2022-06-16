module.exports = {
  extends: [
    require.resolve('./lib/javascript.cjs'),
    require.resolve('./lib/json.cjs'),
  ],
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
};
