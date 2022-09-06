<script lang="ts">
import { defineComponent, withDefaults, ref } from 'vue';
import { useButton } from '@yuukoyoung/composables';

export default defineComponent({
  name: 'HeadlessButton',
});
</script>

<script lang="ts" setup>
// template refs
const element = ref<HTMLElement | null>(null);

// props
const props = withDefaults(
  defineProps<{
    tag?: string;
    isDisabled?: boolean;
  }>(),
  {
    tag: 'button',
    isDisabled: false,
  },
);

// emit
const emit = defineEmits<{
  (e: 'click'): void;
}>();

function handleClick() {
  if (props.isDisabled) {
    return;
  }

  emit('click');
}

// setup return
const {
  role,
  type,
  disabled,
  ariaDisabled,
  handleKeydown,
  handleKeyup,
  tabindex,
} = useButton(element, {
  isDisabled: () => props.isDisabled,
});
</script>

<template>
  <component
    :is="tag"
    ref="element"
    :role="role"
    :type="type"
    :tabindex="tabindex"
    :disabled="disabled"
    :aria-disabled="ariaDisabled"
    @click="handleClick"
    @keydown="handleKeydown"
    @keyup="handleKeyup">
    <slot></slot>
  </component>
</template>
