import { computed, unref } from 'vue';
import { hasImplicitButtonSemantic } from '@yuukoyoung/utils';
import type { MaybeComputedRef } from '@vueuse/core';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';
import { useDisabled } from './useDisabled';
import { useClickable } from './useClickable';

interface UseButtonOptions {
  disabled?: MaybeComputedRef<boolean>;
}

function useButton(
  element: MaybeHTMLElementRef,
  options: UseButtonOptions = {},
) {
  const { disabled: _disabled = false } = options;
  const computedElement = computed(() => unref(element));

  const role = computed(() => {
    if (!computedElement.value) {
      return undefined;
    }

    return hasImplicitButtonSemantic(computedElement.value)
      ? undefined
      : 'button';
  });

  const type = computed(() => {
    if (!computedElement.value) {
      return undefined;
    }

    return computedElement.value.tagName === 'BUTTON' ||
      computedElement.value.tagName === 'INPUT'
      ? 'button'
      : undefined;
  });

  const { disabled, ariaDisabled } = useDisabled(element, {
    disabled: _disabled,
  });
  const { handleKeydown, handleKeyup, tabindex } = useClickable(element);

  return {
    role,
    type,
    disabled,
    ariaDisabled,
    handleKeydown,
    handleKeyup,
    tabindex,
  };
}

export { useButton };
