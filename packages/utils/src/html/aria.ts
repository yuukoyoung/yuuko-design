/**
 * https://www.w3.org/TR/2021/REC-html-aria-20211209/#docconformance-attr
 */
const buttonSemanticSelectors =
  "button, input[type='button'], input[type='image'], input[type='reset'], " +
  "input[type='submit'], summary";

function hasImplicitButtonSemantic(element: HTMLElement): boolean {
  return element.matches(buttonSemanticSelectors);
}

export { hasImplicitButtonSemantic };
