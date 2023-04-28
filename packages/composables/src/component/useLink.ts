import type { MaybeComputedRef } from '@vueuse/core';
import type { MaybeHTMLElementRef } from '@yuukoyoung/types';

import { computed, unref } from 'vue';
import { resolveUnref } from '@vueuse/core';
import { hasImplicitLinkSemantic, allowHrefAttribute } from '@yuukoyoung/utils';
import { useDisabled, useClickable } from '../interaction';

interface UseLinkOptions {
  href: MaybeComputedRef<string>;
  disabled?: MaybeComputedRef<boolean>;
}

function useLink(element: MaybeHTMLElementRef, options: UseLinkOptions) {
  const { href: _href, disabled: _disabled = false } = options;
  const computedElement = computed(() => unref(element));

  const role = computed(() => {
    if (!computedElement.value) {
      return undefined;
    }

    return hasImplicitLinkSemantic(computedElement.value) ? undefined : 'link';
  });

  const href = computed(() => {
    if (!computedElement.value || !allowHrefAttribute(computedElement.value)) {
      return undefined;
    }

    return resolveUnref(_disabled) ? undefined : resolveUnref(_href);
  });

  const dataHref = computed(() => {
    if (!computedElement.value || href.value !== undefined) {
      return undefined;
    }

    return resolveUnref(_href);
  });

  const { disabled, ariaDisabled } = useDisabled(element, {
    disabled: _disabled,
  });

  const { handleKeydown, tabindex } = useClickable(element);

  const _tabindex = computed(() => {
    if (tabindex.value === undefined) {
      return undefined;
    }

    return resolveUnref(_disabled) ? '-1' : tabindex.value;
  });

  return {
    role,
    href,
    dataHref,
    disabled,
    ariaDisabled,
    handleKeydown,
    tabindex: _tabindex,
  };
}

export { useLink };
