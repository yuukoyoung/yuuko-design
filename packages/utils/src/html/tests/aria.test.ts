import { describe, expect, test } from 'vitest';
import { JSDOM } from 'jsdom';
import { hasButtonSemantics } from '../aria';

describe('aria', () => {
  describe('hasButtonSemantics', () => {
    test.each([
      ['button', '<button id="id"></button>', true],
      ['input[type="button"]', '<input id="id" type="button" />', true],
      ['div', '<div id="id"></div>', false],
      ['input[type="text"]', '<input id="id" type="text" />', false],
      ['div[role="button"]', '<div id="id" role="button"></div>', false],
    ])('%s', (_name, outerHTML, expected) => {
      const { window } = new JSDOM(outerHTML);
      const element = window.document.querySelector('#id');

      expect(hasButtonSemantics(element as HTMLElement)).toBe(expected);
    });
  });
});
