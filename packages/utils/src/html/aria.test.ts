import { describe, expect, test } from 'vitest';
import { hasImplicitButtonSemantic } from './aria';

describe('file: html/aria.ts', () => {
  describe('function: hasImplicitButtonSemantic', () => {
    test('should be defined', () => {
      expect(hasImplicitButtonSemantic).toBeDefined();
    });

    test('should return whether the element has implicit button semantic', () => {
      let element: HTMLElement = document.createElement('button');

      expect(hasImplicitButtonSemantic(element)).toBe(true);

      element = document.createElement('div');
      expect(hasImplicitButtonSemantic(element)).toBe(false);

      element = document.createElement('input');
      expect(hasImplicitButtonSemantic(element)).toBe(false);

      element = document.createElement('input');
      element.setAttribute('type', 'button');
      expect(hasImplicitButtonSemantic(element)).toBe(true);

      element = document.createElement('div');
      element.setAttribute('role', 'button');
      expect(hasImplicitButtonSemantic(element)).toBe(false);
    });
  });
});
