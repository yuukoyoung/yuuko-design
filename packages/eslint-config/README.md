# @yuukoyoung/eslint-config

[![View changelog](https://img.shields.io/badge/changelogs.xyz-Explore%20Changelog-brightgreen)](https://changelogs.xyz/@yuukoyoung/eslint-config)

shareable eslint configs

## Install

```shell
pnpm add -D @yuukoyoung/eslint-config
```

## Usage

### .eslintrc.cjs

#### JavaScript

```js
module.exports = {
  root: true,
  extends: ['@yuukoyoung', '@yuukoyoung/eslint-config/prettier'],
};
```

#### TypeScript

```js
module.exports = {
  root: true,
  extends: [
    '@yuukoyoung/eslint-config/typescript',
    '@yuukoyoung/eslint-config/prettier',
  ],
};
```
