import { describe, expect, test, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useLink } from './useLink';

describe('file: component/useLink.ts', () => {
  describe('function: useLink', () => {
    let aElement: HTMLElement;
    let divElement: HTMLElement;

    beforeEach(() => {
      aElement = document.createElement('a');
      aElement.setAttribute('href', 'http://example.com/');
      divElement = document.createElement('div');
    });

    test('should be defined', () => {
      expect(useLink).toBeDefined();
    });

    describe('when element is null', () => {
      test('should return properly', () => {
        const result = useLink(null, {
          href: 'http://example.com/',
        });

        expect(result.role.value).toBe(undefined);
        expect(result.href.value).toBe(undefined);
        expect(result.dataHref.value).toBe(undefined);
        expect(result.tabindex.value).toBe(undefined);
      });
    });

    describe('when element is undefined', () => {
      test('should return properly', () => {
        const result = useLink(undefined, {
          href: 'http://example.com/',
        });

        expect(result.role.value).toBe(undefined);
        expect(result.href.value).toBe(undefined);
        expect(result.dataHref.value).toBe(undefined);
        expect(result.tabindex.value).toBe(undefined);
      });
    });

    describe("when element has implicit 'link' semantic", () => {
      test('should return properly', () => {
        const aResult = useLink(ref(aElement), {
          href: 'http://example.com/',
        });

        expect(aResult.role.value).toBe(undefined);
        expect(aResult.href.value).toBe('http://example.com/');
        expect(aResult.dataHref.value).toBe(undefined);
        expect(aResult.tabindex.value).toBe(undefined);
      });

      test("when 'disabled: true' is passed in", () => {
        const aResult = useLink(ref(aElement), {
          href: 'http://example.com/',
          disabled: true,
        });

        expect(aResult.role.value).toBe(undefined);
        expect(aResult.href.value).toBe(undefined);
        expect(aResult.dataHref.value).toBe('http://example.com/');
        expect(aResult.tabindex.value).toBe(undefined);
      });
    });

    describe("when element doesn't have implicit 'link' semantic", () => {
      test('should return properly', () => {
        const divResult = useLink(ref(divElement), {
          href: 'http://example.com/',
        });

        expect(divResult.role.value).toBe('link');
        expect(divResult.href.value).toBe(undefined);
        expect(divResult.dataHref.value).toBe('http://example.com/');
        expect(divResult.tabindex.value).toBe('0');
      });

      test("when 'disabled: true' is passed in", () => {
        const divResult = useLink(ref(divElement), {
          href: 'http://example.com/',
          disabled: true,
        });

        expect(divResult.role.value).toBe('link');
        expect(divResult.href.value).toBe(undefined);
        expect(divResult.dataHref.value).toBe('http://example.com/');
        expect(divResult.tabindex.value).toBe('-1');
      });
    });

    test('should update reactively', () => {
      const elementRef = ref(aElement);
      const disabledRef = ref(false);
      const { role, href, dataHref, tabindex } = useLink(elementRef, {
        href: 'http://example.com/',
        disabled: disabledRef,
      });

      expect(role.value).toBe(undefined);
      expect(href.value).toBe('http://example.com/');
      expect(dataHref.value).toBe(undefined);
      expect(tabindex.value).toBe(undefined);

      // element: aElement -> divElement
      elementRef.value = divElement;
      expect(role.value).toBe('link');
      expect(href.value).toBe(undefined);
      expect(dataHref.value).toBe('http://example.com/');
      expect(tabindex.value).toBe('0');

      // disabled: false -> true
      disabledRef.value = true;
      expect(role.value).toBe('link');
      expect(href.value).toBe(undefined);
      expect(dataHref.value).toBe('http://example.com/');
      expect(tabindex.value).toBe('-1');
    });
  });
});
