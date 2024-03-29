import { describe, expect, test, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useDisabled } from './useDisabled';

describe('file: interaction/useDisabled.ts', () => {
  describe('function: useDisabled', () => {
    let buttonElement: HTMLElement;
    let divElement: HTMLElement;

    beforeEach(() => {
      buttonElement = document.createElement('button');
      divElement = document.createElement('div');
    });

    test('should be defined', () => {
      expect(useDisabled).toBeDefined();
    });

    describe('when element is null', () => {
      test('should return properly', () => {
        const result = useDisabled(null);

        expect(result.disabled.value).toBe(undefined);
        expect(result.ariaDisabled.value).toBe(undefined);
      });
    });

    describe('when element is undefined', () => {
      test('should return properly', () => {
        const result = useDisabled(undefined);

        expect(result.disabled.value).toBe(undefined);
        expect(result.ariaDisabled.value).toBe(undefined);
      });
    });

    describe("when element allows 'disabled' attribute", () => {
      test('should return properly', () => {
        const buttonResult = useDisabled(ref(buttonElement));

        expect(buttonResult.disabled.value).toBe(undefined);
        expect(buttonResult.ariaDisabled.value).toBe(undefined);
      });

      test("when 'disabled: true' is passed in", () => {
        const buttonResult = useDisabled(ref(buttonElement), {
          disabled: true,
        });

        expect(buttonResult.disabled.value).toBe('');
        expect(buttonResult.ariaDisabled.value).toBe(undefined);
      });
    });

    describe("when element doesn't allow 'disabled' attribute", () => {
      test('should return properly', () => {
        const divResult = useDisabled(ref(divElement));

        expect(divResult.disabled.value).toBe(undefined);
        expect(divResult.ariaDisabled.value).toBe(undefined);
      });

      test("when 'disabled: true' is passed in", () => {
        const divResult = useDisabled(ref(divElement), {
          disabled: true,
        });

        expect(divResult.disabled.value).toBe(undefined);
        expect(divResult.ariaDisabled.value).toBe(true);
      });
    });

    test('should update reactively', () => {
      const elementRef = ref(buttonElement);
      const disabledRef = ref(true);
      const { disabled, ariaDisabled } = useDisabled(elementRef, {
        disabled: disabledRef,
      });

      expect(disabled.value).toBe('');
      expect(ariaDisabled.value).toBe(undefined);

      // element: buttonElement -> divElement
      elementRef.value = divElement;
      expect(disabled.value).toBe(undefined);
      expect(ariaDisabled.value).toBe(true);

      // disabled: true -> false
      disabledRef.value = false;
      expect(disabled.value).toBe(undefined);
      expect(ariaDisabled.value).toBe(undefined);
    });
  });
});
