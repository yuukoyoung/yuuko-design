import { computed, unref } from 'vue';
import { allowDisabledAttribute } from '@yuukoyoung/utils';
import { resolveUnref } from '@vueuse/core';
import type { MaybeComputedRef } from '@vueuse/core';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';

function useDisabled(
  element: MaybeHTMLElementRef,
  isDisabled: MaybeComputedRef<boolean>,
) {
  const computedElement = computed(() => unref(element));

  const disabled = computed(() => {
    if (
      !computedElement.value ||
      !allowDisabledAttribute(computedElement.value)
    ) {
      return undefined;
    }

    return resolveUnref(isDisabled) ? '' : undefined;
  });
  const ariaDisabled = computed(() => {
    if (!computedElement.value || disabled.value !== undefined) {
      return undefined;
    }

    return resolveUnref(isDisabled) ? true : undefined;
  });

  return { disabled, ariaDisabled };
}

export { useDisabled };
