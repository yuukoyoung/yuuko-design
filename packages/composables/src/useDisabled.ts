import { computed, unref } from 'vue';
import { allowDisabledAttribute } from '@yuukoyoung/utils';
import { resolveUnref } from '@vueuse/core';
import type { MaybeComputedRef } from '@vueuse/core';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';

interface useDisabledOptions {
  disabled?: MaybeComputedRef<boolean>;
}

function useDisabled(
  element: MaybeHTMLElementRef,
  options: useDisabledOptions = {},
) {
  const { disabled: _disabled = false } = options;
  const computedElement = computed(() => unref(element));

  const disabled = computed(() => {
    if (
      !computedElement.value ||
      !allowDisabledAttribute(computedElement.value)
    ) {
      return undefined;
    }

    return resolveUnref(_disabled) ? '' : undefined;
  });

  const ariaDisabled = computed(() => {
    if (!computedElement.value || disabled.value !== undefined) {
      return undefined;
    }

    return resolveUnref(_disabled) ? true : undefined;
  });

  return { disabled, ariaDisabled };
}

export { useDisabled };
