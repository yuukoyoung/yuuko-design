<script lang="ts">
import { computed, onUpdated, ref, triggerRef, withDefaults } from 'vue';
import { useLink } from '@yuukoyoung/composables';

export default {
  name: 'HeadlessLink',
};
</script>

<script lang="ts" setup>
// template refs
const element = ref<HTMLElement | null>(null);

onUpdated(() => {
  triggerRef(element);
});

// props
const props = withDefaults(
  defineProps<{
    as?: string;
    href: string;
    external?: boolean;
    disabled?: boolean;
  }>(),
  {
    as: 'a',
    href: '',
    external: false,
    disabled: false,
  },
);

// emit
const emit = defineEmits<{
  (event: 'click'): void;
}>();

function handleClick() {
  if (props.disabled) {
    return;
  }

  emit('click');
}

// setup return
const {
  role,
  href: _href,
  dataHref,
  disabled: _disabled,
  ariaDisabled,
  handleKeydown,
  tabindex,
} = useLink(element, {
  disabled: () => props.disabled,
  href: () => props.href,
});

const otherAttrs = computed(() => {
  if (props.external) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return undefined;
});
</script>

<template>
  <component
    :is="as"
    ref="element"
    :role="role"
    :href="_href"
    :data-href="dataHref"
    :disabled="_disabled"
    :aria-disabled="ariaDisabled"
    :tabindex="tabindex"
    v-bind="otherAttrs"
    @click="handleClick"
    @keydown="handleKeydown">
    <slot></slot>
  </component>
</template>
