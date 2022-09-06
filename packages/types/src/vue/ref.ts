import type { MaybeElementRef } from '@vueuse/core';

export type MaybeHTMLElementRef = MaybeElementRef<
  HTMLElement | null | undefined
>;
