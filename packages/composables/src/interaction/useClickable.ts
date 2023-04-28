import type { MaybeHTMLElementRef } from '@yuukoyoung/types';

import { computed, unref } from 'vue';
import { useFocusable } from './useFocusable';

function useClickable(element: MaybeHTMLElementRef) {
  const computedElement = computed(() => unref(element));

  function handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      event.preventDefault();
      computedElement.value?.click();
    }
  }

  function handleKeyup(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      computedElement.value?.click();
    }
  }

  const { tabindex } = useFocusable(computedElement);

  return { handleKeydown, handleKeyup, tabindex };
}

export { useClickable };
