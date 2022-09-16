import { computed, unref } from 'vue';
import { hasImplicitButtonSemantic } from '@yuukoyoung/utils';
import type { MaybeComputedRef } from '@vueuse/core';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';
import { useDisabled } from './useDisabled';
import { useClickable } from './useClickable';

interface UseButtonOptions {
  isDisabled?: MaybeComputedRef<boolean>;
}

function useButton(
  element: MaybeHTMLElementRef,
  options: UseButtonOptions = {},
) {
  const { isDisabled = false } = options;
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

  const { disabled, ariaDisabled } = useDisabled(element, { isDisabled });
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
