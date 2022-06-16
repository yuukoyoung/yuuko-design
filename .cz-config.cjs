module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests or correcting existing tests',
    },
    {
      value: 'chore',
      name: 'chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    {
      value: 'build',
      name: 'build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'deps',
      name: 'deps:     Updates about dependencies',
    },
    { value: 'revert', name: 'revert:   Revert changes' },
  ],
  messages: {
    type: "Select the type of change that you're committing:\n",
    scope: '\nDenote the SCOPE of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  allowBreakingChanges: ['feat'],
};
