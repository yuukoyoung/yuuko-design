<script lang="ts">
import { computed } from 'vue';
import { HeadlessLink } from '@yuukoyoung/headless-ui';

export default { name: 'YuLink' };
</script>

<script lang="ts" setup>
// props
const props = withDefaults(
  defineProps<{
    as?: string;
    href: string;
    external?: boolean;
    disabled?: boolean;
    underline?: boolean;
  }>(),
  {
    as: 'a',
    external: false,
    disabled: false,
  },
);

const classNames = computed(() => {
  return {
    'yu-link': true,
    [`yu-link--underline`]: props.underline,
  };
});
</script>

<template>
  <HeadlessLink
    :class="classNames"
    :as="as"
    :href="href"
    :external="external"
    :disabled="disabled">
    <slot></slot>
  </HeadlessLink>
</template>
