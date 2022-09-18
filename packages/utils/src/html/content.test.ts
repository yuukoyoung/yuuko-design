import { describe, expect, test } from 'vitest';
import { isInteractiveContent } from './content';

describe('file: html/content.ts', () => {
  describe('function: isInteractiveContent', () => {
    test('should be defined', () => {
      expect(isInteractiveContent).toBeDefined();
    });

    test('should return whether the element is interactive content', () => {
      let element: HTMLElement = document.createElement('button');

      expect(isInteractiveContent(element)).toBe(true);

      element = document.createElement('div');
      expect(isInteractiveContent(element)).toBe(false);

      element = document.createElement('a');
      expect(isInteractiveContent(element)).toBe(false);

      element = document.createElement('a');
      element.setAttribute('href', 'http://example.com/');
      expect(isInteractiveContent(element)).toBe(true);

      element = document.createElement('div');
      element.setAttribute('tabindex', '0');
      expect(isInteractiveContent(element)).toBe(false);
    });
  });
});
