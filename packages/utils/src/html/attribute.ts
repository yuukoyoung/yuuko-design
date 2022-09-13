/**
 * https://whatwg-cn.github.io/html/#attributes-2
 */
const disabledAttributeSelectors =
  'button, input, optgroup, option, select, textarea, fieldset, link';

function allowDisabledAttribute(element: HTMLElement): boolean {
  return element.matches(disabledAttributeSelectors);
}

export { allowDisabledAttribute };
