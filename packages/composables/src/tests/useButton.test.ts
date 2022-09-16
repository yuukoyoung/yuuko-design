import { describe, expect, test, beforeEach } from 'vitest';
import { computed, ref } from 'vue';
import { useButton } from '../useButton';

describe('file: useButton.ts', () => {
  describe('function: useButton', () => {
    let divElement: HTMLElement;
    let buttonElement: HTMLElement;

    beforeEach(() => {
      divElement = document.createElement('div');
      buttonElement = document.createElement('button');
    });

    test('should be defined', () => {
      expect(useButton).toBeDefined();
    });

    test('should support null', () => {
      const result = useButton(null);

      expect(result.role.value).toBe(undefined);
      expect(result.type.value).toBe(undefined);
    });

    test('should support undefined', () => {
      const result = useButton(undefined);

      expect(result.role.value).toBe(undefined);
      expect(result.type.value).toBe(undefined);
    });

    test('should return properly', () => {
      const divResult = useButton(ref(divElement));

      expect(divResult.role.value).toBe('button');
      expect(divResult.type.value).toBe(undefined);

      const buttonResult = useButton(ref(buttonElement));

      expect(buttonResult.role.value).toBe(undefined);
      expect(buttonResult.type.value).toBe('button');
    });

    test('should update reactively', () => {
      const elementRef = ref(divElement);
      const { role, type } = useButton(elementRef);

      expect(role.value).toBe('button');
      expect(type.value).toBe(undefined);

      elementRef.value = buttonElement;
      expect(role.value).toBe(undefined);
      expect(type.value).toBe('button');
    });

    test('should support computed refs', () => {
      const divResult = useButton(computed(() => divElement));

      expect(divResult.role.value).toBe('button');
      expect(divResult.type.value).toBe(undefined);

      const buttonResult = useButton(computed(() => buttonElement));

      expect(buttonResult.role.value).toBe(undefined);
      expect(buttonResult.type.value).toBe('button');
    });

    test('should support values', () => {
      const divResult = useButton(divElement);

      expect(divResult.role.value).toBe('button');
      expect(divResult.type.value).toBe(undefined);

      const buttonResult = useButton(buttonElement);

      expect(buttonResult.role.value).toBe(undefined);
      expect(buttonResult.type.value).toBe('button');
    });
  });
});
