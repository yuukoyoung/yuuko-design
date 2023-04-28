import { beforeEach, describe, expect, test } from 'vitest';
import { ref } from 'vue';
import { useFocusable } from './useFocusable';

describe('file: interaction/useFocusable.ts', () => {
  describe('function: useFocusable', () => {
    let buttonElement: HTMLElement;
    let divElement: HTMLElement;

    beforeEach(() => {
      buttonElement = document.createElement('button');
      divElement = document.createElement('div');
    });

    test('should be defined', () => {
      expect(useFocusable).toBeDefined();
    });

    describe('when element is null', () => {
      test('should return properly', () => {
        expect(useFocusable(ref(null)).tabindex.value).toBe(undefined);
      });
    });

    describe('when element is undefined', () => {
      test('should return properly', () => {
        expect(useFocusable(ref(undefined)).tabindex.value).toBe(undefined);
      });
    });

    describe('when element is interactive content', () => {
      test('should return properly', () => {
        expect(useFocusable(ref(buttonElement)).tabindex.value).toBe(undefined);
      });
    });

    describe('when element is not interactive content', () => {
      test('should return properly', () => {
        expect(useFocusable(ref(divElement)).tabindex.value).toBe('0');
      });
    });

    test('should update reactively', () => {
      const elementRef = ref(buttonElement);
      const { tabindex } = useFocusable(elementRef);

      expect(tabindex.value).toBe(undefined);

      // element: buttonElement -> divElement
      elementRef.value = divElement;
      expect(tabindex.value).toBe('0');
    });
  });
});
