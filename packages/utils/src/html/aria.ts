/**
 * https://www.w3.org/TR/2021/REC-html-aria-20211209/#docconformance-attr
 */
const buttonSemanticsSelectors =
  "button, input[type='button'], input[type='image'], input[type='reset'], " +
  "input[type='submit'], summary";

function hasButtonSemantics(element: HTMLElement): boolean {
  console.log('element.tagName', element.tagName);

  return element.matches(buttonSemanticsSelectors);
}

export { hasButtonSemantics };
