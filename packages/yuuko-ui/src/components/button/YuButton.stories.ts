import YuButton from './YuButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { capitalize } from '@yuukoyoung/utils';

export default {
  title: 'COMPONENTS/Button',
  component: YuButton,
  argTypes: {
    // props
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    compact: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: [
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
      ],
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'light', 'default', 'outline', 'subtle'],
    },
    radius: {
      control: 'inline-radio',
      options: ['none', 'small', 'medium', 'large', 'full'],
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
    variant: 'filled',
    color: 'blue',
    size: 'medium',
    compact: false,
    radius: 'medium',
    disabled: false,
    as: 'button',
    // slots
    default: 'Button',
  },
  parameters: {
    controls: { expanded: true, exclude: [] },
  },
} as Meta<typeof YuButton>;

type Story = StoryObj<typeof YuButton>;

export const Basic: Story = {
  render: (args) => ({
    components: { YuButton },
    setup() {
      return { args };
    },
    template: '<YuButton v-bind="args">{{ args.default }}</YuButton>',
  }),
};

export const Variant: Story = {
  render: (args) => ({
    components: { YuButton },
    setup() {
      return {
        args,
        variantList: ['filled', 'light', 'default', 'outline', 'subtle'],
        capitalize,
      };
    },
    template: `<div class="space-x-4">
        <template v-for="variant in variantList">
          <YuButton v-bind="args" :variant="variant" >{{ args.default }} {{ capitalize(variant) }}</YuButton>
        </template>
      </div>`,
  }),
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

export const Color: Story = {
  render: (args) => ({
    components: { YuButton },
    setup() {
      return {
        args,
        colorList: [
          'dark',
          'gray',
          'red',
          'pink',
          'grape',
          'violet',
          'indigo',
          'blue',
          'cyan',
          'teal',
          'green',
          'lime',
          'yellow',
          'orange',
        ],
        capitalize,
      };
    },
    template: `<div class="grid gap-4 grid-cols-5">
        <template v-for="color in colorList">
          <YuButton v-bind="args" :color="color" >{{ args.default }} {{ capitalize(color) }}</YuButton>
        </template>
      </div>`,
  }),
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
};

export const Size: Story = {
  render: (args) => ({
    components: { YuButton },
    setup() {
      return {
        args,
        sizeList: ['small', 'medium', 'large'],
        capitalize,
      };
    },
    template: `<div class="space-x-4">
        <template v-for="size in sizeList">
          <YuButton v-bind="args" :size="size" >{{ args.default }} {{ capitalize(size) }}</YuButton>
        </template>
      </div>`,
  }),
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const Radius: Story = {
  render: (args) => ({
    components: { YuButton },
    setup() {
      return {
        args,
        radiusList: ['none', 'small', 'medium', 'large', 'full'],
        capitalize,
      };
    },
    template: `<div class="space-x-4">
        <template v-for="radius in radiusList">
          <YuButton v-bind="args" :radius="radius" >{{ args.default }} {{ capitalize(radius) }}</YuButton>
        </template>
      </div>`,
  }),
  argTypes: {
    radius: {
      table: {
        disable: true,
      },
    },
  },
};
