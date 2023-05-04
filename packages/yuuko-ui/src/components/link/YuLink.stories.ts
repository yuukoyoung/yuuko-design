import YuLink from './YuLink.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

export default {
  title: 'COMPONENTS/Link',
  component: YuLink,
  argTypes: {
    // props
    href: {
      control: 'text',
    },
    external: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
    as: {
      control: 'text',
    },
    // slots
    default: {
      control: 'text',
      table: {
        type: {
          summary: 'default slot',
        },
      },
    },
    // emits
    onClick: {},
  },
  args: {
    // props
    href: 'http://example.com',
    external: false,
    disabled: false,
    as: 'a',
    underline: false,
    // slots
    default: 'Link',
  },
  parameters: {
    controls: { expanded: true, exclude: [] },
  },
} as Meta<typeof YuLink>;

type Story = StoryObj<typeof YuLink>;

export const Basic: Story = {
  render: (args) => ({
    components: { YuLink },
    setup() {
      return { args };
    },
    template: '<YuLink v-bind="args">{{ args.default }}</YuLink>',
  }),
};
