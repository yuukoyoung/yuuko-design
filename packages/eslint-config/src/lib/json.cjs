module.exports = {
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
    },
    {
      files: ['*.json5'],
      extends: ['plugin:jsonc/recommended-with-json5'],
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      extends: ['plugin:jsonc/prettier'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'publishConfig',
              'description',
              'keywords',
              'homepage',
              'repository',
              'bugs',
              'license',
              'funding',
              'author',
              'contributors',
              'files',
              'type',
              'main',
              'module',
              'browser',
              'types',
              'typings',
              'bin',
              'man',
              'directories',
              'exports',
              'imports',
              'sideEffects',
              'scripts',
              'config',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'bundledDependencies',
              'optionalDependencies',
              'overrides',
              'packageManager',
              'engines',
              'os',
              'cpu',
              'workspaces',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['tsconfig*.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'files',
              'include',
              'exclude',
              'extends',
              'compilerOptions',
              'watchOptions',
              'typeAcquisition',
              'references',
            ],
          },
        ],
      },
    },
  ],
};