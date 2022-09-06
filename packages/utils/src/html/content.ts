/**
 * https://whatwg-cn.github.io/html/#element-content-categories
 */
const interactiveContentSelectors =
  'a[href], audio[controls], button, details, embed, iframe, img[usemap], ' +
  "input:not([type='hidden']), label, object[usemap], select, textarea, " +
  'video[controls], [tabindex]';

function isInteractiveContent(element: HTMLElement): boolean {
  return element.matches(interactiveContentSelectors);
}

export { isInteractiveContent };
