module.exports = {
  extends: ['eslint:recommended', 'plugin:eslint-comments/recommended'],
  env: {
    browser: true,
    es2022: true,
    es2021: true,
    es2020: true,
    es2019: true,
    es2018: true,
    es2017: true,
    es2016: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: ['case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like', 'class'],
      },
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'class'],
        next: '*',
      },
    ],
    'eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    {
      files: ['*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.cjs'],
      env: { commonjs: true },
      parserOptions: {
        sourceType: 'commonjs',
      },
    },
  ],
};
