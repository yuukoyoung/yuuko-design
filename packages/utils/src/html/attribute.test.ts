import { describe, expect, test } from 'vitest';
import { allowDisabledAttribute } from './attribute';

describe('file: html/attribute.ts', () => {
  describe('function: allowDisabledAttribute', () => {
    test('should be defined', () => {
      expect(allowDisabledAttribute).toBeDefined();
    });

    test('should return whether the element allow disabled attribute', () => {
      let element: HTMLElement = document.createElement('button');

      expect(allowDisabledAttribute(element)).toBe(true);

      element = document.createElement('fieldset');
      expect(allowDisabledAttribute(element)).toBe(true);

      element = document.createElement('link');
      expect(allowDisabledAttribute(element)).toBe(true);

      element = document.createElement('div');
      expect(allowDisabledAttribute(element)).toBe(false);
    });
  });
});
