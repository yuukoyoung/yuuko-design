module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  ],
};
