<script lang="ts">
import { onUpdated, ref, triggerRef, withDefaults } from 'vue';
import { useButton } from '@yuukoyoung/composables';

export default {
  name: 'HeadlessButton',
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
    disabled?: boolean;
  }>(),
  {
    as: 'button',
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
  type,
  disabled: _disabled,
  ariaDisabled,
  handleKeydown,
  handleKeyup,
  tabindex,
} = useButton(element, {
  disabled: () => props.disabled,
});
</script>

<template>
  <component
    :is="as"
    ref="element"
    :role="role"
    :type="type"
    :disabled="_disabled"
    :aria-disabled="ariaDisabled"
    :tabindex="tabindex"
    @click="handleClick"
    @keydown="handleKeydown"
    @keyup="handleKeyup">
    <slot></slot>
  </component>
</template>
