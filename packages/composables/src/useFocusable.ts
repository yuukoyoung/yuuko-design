import { computed, unref } from 'vue';
import { isInteractiveContent } from '@yuukoyoung/utils';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';

function useFocusable(element: MaybeHTMLElementRef) {
  const computedElement = computed(() => unref(element));

  const tabindex = computed(() => {
    if (!computedElement.value) {
      return undefined;
    }

    return isInteractiveContent(computedElement.value) ? undefined : '0';
  });

  return { tabindex };
}

export { useFocusable };
