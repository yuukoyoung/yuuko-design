import { describe, expect, test } from 'vitest';
import { isInteractiveContent } from '../content';

describe('aria', () => {
  describe('isInteractiveContent', () => {
    test.each([
      ['button', '<button id="id"></button>', true],
      ['a[href]', '<a id="id" href="xxx" />', true],
      ['div', '<div id="id"></div>', false],
      ['a', '<a id="id" />', false],
    ])('%s', (_name, outerHTML, expected) => {
      const { window } = new JSDOM(outerHTML);
      const element = window.document.querySelector('#id');

      expect(isInteractiveContent(element as HTMLElement)).toBe(expected);
    });
  });
});
