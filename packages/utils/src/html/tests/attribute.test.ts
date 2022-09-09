import { describe, expect, test } from 'vitest';
import { hasDisabledAttribute } from '../attribute';

describe('aria', () => {
  describe('hasDisabledAttribute', () => {
    test.each([
      ['button', '<button id="id"></button>', true],
      ['fieldset', '<fieldset id="id"></fieldset>', true],
      ['link', '<link id="id" />', true],
      ['div', '<div id="id"></div>', false],
    ])('%s', (_name, outerHTML, expected) => {
      const { window } = new JSDOM(outerHTML);
      const element = window.document.querySelector('#id');

      expect(hasDisabledAttribute(element as HTMLElement)).toBe(expected);
    });
  });
});
