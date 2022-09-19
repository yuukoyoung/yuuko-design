# @yuukoyoung/stylelint-config

[![View changelog](https://img.shields.io/badge/changelogs.xyz-Explore%20Changelog-brightgreen)](https://changelogs.xyz/@yuukoyoung/stylelint-config)

shareable stylelint configs

## Install

```shell
pnpm add -D @yuukoyoung/stylelint-config
```

## Usage

### stylelint.config.cjs

#### CSS

```js
module.exports = {
  extends: [
    '@yuukoyoung/stylelint-config',
    '@yuukoyoung/stylelint-config/prettier',
  ],
};
```

#### SCSS

```js
module.exports = {
  extends: [
    '@yuukoyoung/stylelint-config/scss',
    '@yuukoyoung/stylelint-config/scss/prettier',
  ],
};
```

#### Vue

```js
module.exports = {
  extends: [
    '@yuukoyoung/stylelint-config/scss',
    '@yuukoyoung/stylelint-config/scss/vue',
    '@yuukoyoung/stylelint-config/scss/prettier',
  ],
};
```
