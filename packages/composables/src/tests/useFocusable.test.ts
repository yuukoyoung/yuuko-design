import { beforeEach, describe, expect, test } from 'vitest';
import { ref, computed } from 'vue';
import { useFocusable } from '../useFocusable';

describe('file: useFocusable.ts', () => {
  describe('function: useFocusable', () => {
    let divElement: HTMLElement;
    let buttonElement: HTMLElement;

    beforeEach(() => {
      divElement = document.createElement('div');
      buttonElement = document.createElement('button');
    });

    test('should be defined', () => {
      expect(useFocusable).toBeDefined();
    });

    test('should support null', () => {
      expect(useFocusable(null).tabindex.value).toBe(undefined);
    });

    test('should support undefined', () => {
      expect(useFocusable(undefined).tabindex.value).toBe(undefined);
    });

    test('should return properly', () => {
      expect(useFocusable(ref(divElement)).tabindex.value).toBe('0');

      expect(useFocusable(ref(buttonElement)).tabindex.value).toBe(undefined);
    });

    test('should update reactively', () => {
      const elementRef = ref(divElement);
      const { tabindex } = useFocusable(elementRef);

      expect(tabindex.value).toBe('0');

      elementRef.value = buttonElement;
      expect(tabindex.value).toBe(undefined);
    });

    test('should support computed refs', () => {
      expect(useFocusable(computed(() => divElement)).tabindex.value).toBe('0');

      expect(useFocusable(computed(() => buttonElement)).tabindex.value).toBe(
        undefined,
      );
    });

    test('should support values', () => {
      expect(useFocusable(divElement).tabindex.value).toBe('0');

      expect(useFocusable(buttonElement).tabindex.value).toBe(undefined);
    });
  });
});
