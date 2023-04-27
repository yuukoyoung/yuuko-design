/**
 * https://www.w3.org/TR/html-aria/#docconformance-attr
 */
const buttonSemanticSelectors =
  "button, input[type='button'], input[type='image'], input[type='reset'], " +
  "input[type='submit'], summary";

function hasImplicitButtonSemantic(element: HTMLElement): boolean {
  return element.matches(buttonSemanticSelectors);
}

const linkSemanticSelectors = 'a[href], area[href]';

function hasImplicitLinkSemantic(element: HTMLElement): boolean {
  return element.matches(linkSemanticSelectors);
}

export { hasImplicitButtonSemantic, hasImplicitLinkSemantic };
