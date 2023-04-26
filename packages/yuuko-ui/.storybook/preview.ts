import '../src/style/index.css';

import type { Preview } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
  },
};

export default preview;
