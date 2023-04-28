import { describe, expect, test, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useButton } from './useButton';

describe('file: component/useButton.ts', () => {
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
        expect(result.tabindex.value).toBe(undefined);
      });
    });

    describe('when element is undefined', () => {
      test('should return properly', () => {
        const result = useButton(undefined);

        expect(result.role.value).toBe(undefined);
        expect(result.type.value).toBe(undefined);
        expect(result.tabindex.value).toBe(undefined);
      });
    });

    describe("when element has implicit 'button' semantic", () => {
      test('should return properly', () => {
        const buttonResult = useButton(ref(buttonElement));

        expect(buttonResult.role.value).toBe(undefined);
        expect(buttonResult.type.value).toBe('button');
        expect(buttonResult.tabindex.value).toBe(undefined);
      });

      test("when 'disabled: true' is passed in", () => {
        const buttonResult = useButton(ref(buttonElement), { disabled: true });

        expect(buttonResult.role.value).toBe(undefined);
        expect(buttonResult.type.value).toBe('button');
        expect(buttonResult.tabindex.value).toBe(undefined);
      });
    });

    describe("when element doesn't have implicit 'button' semantic", () => {
      test('should return properly', () => {
        const divResult = useButton(ref(divElement), { disabled: ref(true) });

        expect(divResult.role.value).toBe('button');
        expect(divResult.type.value).toBe(undefined);
        expect(divResult.tabindex.value).toBe('-1');
      });

      test("when 'disabled: true' is passed in", () => {
        const divResult = useButton(ref(divElement), { disabled: true });

        expect(divResult.disabled.value).toBe(undefined);
        expect(divResult.ariaDisabled.value).toBe(true);
        expect(divResult.tabindex.value).toBe('-1');
      });
    });

    test('should update reactively', () => {
      const elementRef = ref(buttonElement);
      const disabledRef = ref(false);
      const { role, type, tabindex } = useButton(elementRef, {
        disabled: disabledRef,
      });

      expect(role.value).toBe(undefined);
      expect(type.value).toBe('button');
      expect(tabindex.value).toBe(undefined);

      // element: buttonElement -> divElement
      elementRef.value = divElement;
      expect(role.value).toBe('button');
      expect(type.value).toBe(undefined);
      expect(tabindex.value).toBe('0');

      // disabled: false -> true
      disabledRef.value = true;
      expect(role.value).toBe('button');
      expect(type.value).toBe(undefined);
      expect(tabindex.value).toBe('-1');
    });
  });
});
