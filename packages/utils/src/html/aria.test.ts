import { describe, expect, test } from 'vitest';
import { hasImplicitButtonSemantic, hasImplicitLinkSemantic } from './aria';

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

  describe('function: hasImplicitLinkSemantic', () => {
    test('should be defined', () => {
      expect(hasImplicitLinkSemantic).toBeDefined();
    });

    test('should return whether the element has implicit link semantic', () => {
      let element: HTMLElement = document.createElement('a');

      expect(hasImplicitLinkSemantic(element)).toBe(false);

      element.setAttribute('href', 'http://example.com/');
      expect(hasImplicitLinkSemantic(element)).toBe(true);

      element = document.createElement('area');
      expect(hasImplicitLinkSemantic(element)).toBe(false);

      element.setAttribute('href', 'http://example.com/');
      expect(hasImplicitLinkSemantic(element)).toBe(true);

      element = document.createElement('div');
      element.setAttribute('role', 'link');
      expect(hasImplicitLinkSemantic(element)).toBe(false);
    });
  });
});
