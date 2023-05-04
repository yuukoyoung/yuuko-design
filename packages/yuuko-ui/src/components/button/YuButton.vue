<script lang="ts">
import { computed, defineComponent } from 'vue';
import { HeadlessButton } from '@yuukoyoung/headless-ui';

export default defineComponent({ name: 'YuButton' });
</script>

<script lang="ts" setup>
// props
const props = withDefaults(
  defineProps<{
    as?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    compact?: boolean;
    color?:
      | 'dark'
      | 'gray'
      | 'red'
      | 'pink'
      | 'grape'
      | 'violet'
      | 'indigo'
      | 'blue'
      | 'cyan'
      | 'teal'
      | 'green'
      | 'lime'
      | 'yellow'
      | 'orange';
    variant?: 'filled' | 'light' | 'default' | 'outline' | 'subtle';
    radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  }>(),
  {
    as: 'button',
    disabled: false,
    size: 'medium',
    compact: false,
    color: 'blue',
    variant: 'default',
    radius: 'medium',
  },
);

const classNames = computed(() => {
  return {
    'yu-btn': true,
    [`yu-btn--${props.size}`]: props.size,
    'yu-btn--compact': props.compact,
    [`yu-color-${props.color}`]: props.color,
    [`yu-btn--${props.variant}`]: props.variant,
    [`yu-radius-${props.radius}`]: props.radius,
  };
});
</script>

<template>
  <HeadlessButton :class="classNames" :as="as" :disabled="disabled">
    <slot></slot>
  </HeadlessButton>
</template>
