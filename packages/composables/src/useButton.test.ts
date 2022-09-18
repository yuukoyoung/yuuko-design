import { describe, expect, test, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useButton } from './useButton';

describe('file: useButton.ts', () => {
  describe('function: useButton', () => {
    let buttonElement: HTMLElement;
    let divElement: HTMLElement;

    beforeEach(() => {
      buttonElement = document.createElement('button');
      divElement = document.createElement('div');
    });

    test('should be defined', () => {
      expect(useButton).toBeDefined();
    });

    describe('when element is null', () => {
      test('should return properly', () => {
        const result = useButton(null);

        expect(result.role.value).toBe(undefined);
        expect(result.type.value).toBe(undefined);
      });
    });

    describe('when element is undefined', () => {
      test('should return properly', () => {
        const result = useButton(undefined);

        expect(result.role.value).toBe(undefined);
        expect(result.type.value).toBe(undefined);
      });
    });

    describe("when element has implicit 'button' semantic", () => {
      test('should return properly', () => {
        const buttonResult = useButton(ref(buttonElement));

        expect(buttonResult.role.value).toBe(undefined);
        expect(buttonResult.type.value).toBe('button');
      });
    });

    describe("when element doesn't have implicit 'button' semantic", () => {
      test('should return properly', () => {
        const divResult = useButton(ref(divElement));

        expect(divResult.role.value).toBe('button');
        expect(divResult.type.value).toBe(undefined);
      });
    });

    test('should update reactively', () => {
      const elementRef = ref(buttonElement);
      const { role, type } = useButton(elementRef);

      expect(role.value).toBe(undefined);
      expect(type.value).toBe('button');

      // element: buttonElement -> divElement
      elementRef.value = divElement;
      expect(role.value).toBe('button');
      expect(type.value).toBe(undefined);
    });
  });
});
