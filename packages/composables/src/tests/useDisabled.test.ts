import { describe, expect, test, beforeEach } from 'vitest';
import { computed, ref } from 'vue';
import { useDisabled } from '../useDisabled';

describe('file: useDisabled.ts', () => {
  describe('function: useDisabled', () => {
    let divElement: HTMLElement;
    let buttonElement: HTMLElement;
    let isDisabled: boolean;

    beforeEach(() => {
      divElement = document.createElement('div');
      buttonElement = document.createElement('button');
      isDisabled = true;
    });

    test('should be defined', () => {
      expect(useDisabled).toBeDefined();
    });

    test('should support null', () => {
      const result = useDisabled(null, {
        isDisabled,
      });

      expect(result.disabled.value).toBe(undefined);
      expect(result.ariaDisabled.value).toBe(undefined);
    });

    test('should support undefined', () => {
      const result = useDisabled(undefined, {
        isDisabled,
      });

      expect(result.disabled.value).toBe(undefined);
      expect(result.ariaDisabled.value).toBe(undefined);
    });

    describe('when no options passed in', () => {
      test('should return undefined', () => {
        const divResult = useDisabled(ref(divElement));

        expect(divResult.disabled.value).toBe(undefined);
        expect(divResult.ariaDisabled.value).toBe(undefined);

        const buttonResult = useDisabled(ref(buttonElement));

        expect(buttonResult.disabled.value).toBe(undefined);
        expect(buttonResult.ariaDisabled.value).toBe(undefined);
      });
    });

    describe('when no isDisabled passed in', () => {
      test('should return undefined', () => {
        const divResult = useDisabled(ref(divElement), {});

        expect(divResult.disabled.value).toBe(undefined);
        expect(divResult.ariaDisabled.value).toBe(undefined);

        const buttonResult = useDisabled(ref(buttonElement), {});

        expect(buttonResult.disabled.value).toBe(undefined);
        expect(buttonResult.ariaDisabled.value).toBe(undefined);
      });
    });

    test('should return properly', () => {
      const divResult = useDisabled(ref(divElement), {
        isDisabled: ref(isDisabled),
      });

      expect(divResult.disabled.value).toBe(undefined);
      expect(divResult.ariaDisabled.value).toBe(true);

      const buttonResult = useDisabled(ref(buttonElement), {
        isDisabled: ref(isDisabled),
      });

      expect(buttonResult.disabled.value).toBe('');
      expect(buttonResult.ariaDisabled.value).toBe(undefined);
    });

    test('should update reactively', () => {
      const elementRef = ref(divElement);
      const isDisabledRef = ref(isDisabled);
      const { disabled, ariaDisabled } = useDisabled(elementRef, {
        isDisabled: isDisabledRef,
      });

      expect(disabled.value).toBe(undefined);
      expect(ariaDisabled.value).toBe(true);

      elementRef.value = buttonElement;
      expect(disabled.value).toBe('');
      expect(ariaDisabled.value).toBe(undefined);

      isDisabledRef.value = false;
      expect(disabled.value).toBe(undefined);
      expect(ariaDisabled.value).toBe(undefined);
    });

    test('should support computed refs', () => {
      const divResult = useDisabled(
        computed(() => divElement),
        {
          isDisabled: ref(isDisabled),
        },
      );

      expect(divResult.disabled.value).toBe(undefined);
      expect(divResult.ariaDisabled.value).toBe(true);

      const buttonResult = useDisabled(
        computed(() => buttonElement),
        {
          isDisabled: ref(isDisabled),
        },
      );

      expect(buttonResult.disabled.value).toBe('');
      expect(buttonResult.ariaDisabled.value).toBe(undefined);
    });

    test('should support values', () => {
      const divResult = useDisabled(divElement, {
        isDisabled: ref(isDisabled),
      });

      expect(divResult.disabled.value).toBe(undefined);
      expect(divResult.ariaDisabled.value).toBe(true);

      const buttonResult = useDisabled(buttonElement, {
        isDisabled: ref(isDisabled),
      });

      expect(buttonResult.disabled.value).toBe('');
      expect(buttonResult.ariaDisabled.value).toBe(undefined);
    });
  });
});
