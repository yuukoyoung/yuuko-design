import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { ref } from 'vue';
import { useClickable } from './useClickable';

describe('file: interaction/useClickable.ts', () => {
  describe('function: useClickable', () => {
    let divElement: HTMLElement;
    const handleClick = vi.fn(() => {
      console.log('handleClick');
    });
    const enterKeyDownEvent = new KeyboardEvent('keydown', { code: 'Enter' });
    const enterKeyUpEvent = new KeyboardEvent('keyup', { code: 'Enter' });
    const spaceKeyDownEvent = new KeyboardEvent('keydown', { code: 'Space' });
    const spaceKeyUpEvent = new KeyboardEvent('keyup', { code: 'Space' });

    beforeEach(() => {
      divElement = document.createElement('div');
      divElement.addEventListener('click', handleClick);
    });

    afterEach(() => {
      divElement.removeEventListener('click', handleClick);
      handleClick.mockClear();
    });

    test('should be defined', () => {
      expect(useClickable).toBeDefined();
    });

    test('should be called properly', () => {
      const divResult = useClickable(ref(divElement));

      divElement.addEventListener('keydown', divResult.handleKeydown);
      divElement.addEventListener('keyup', divResult.handleKeyup);

      expect(handleClick).not.toBeCalled();
      document.dispatchEvent(enterKeyDownEvent);
      document.dispatchEvent(enterKeyDownEvent);
      document.dispatchEvent(spaceKeyUpEvent);
      expect(handleClick).not.toBeCalled();
      divElement.dispatchEvent(enterKeyDownEvent);
      expect(handleClick).toBeCalledTimes(1);
      divElement.dispatchEvent(enterKeyDownEvent);
      expect(handleClick).toBeCalledTimes(2);
      divElement.dispatchEvent(enterKeyUpEvent);
      divElement.dispatchEvent(spaceKeyDownEvent);
      divElement.dispatchEvent(spaceKeyDownEvent);
      expect(handleClick).toBeCalledTimes(2);
      divElement.dispatchEvent(spaceKeyUpEvent);
      expect(handleClick).toBeCalledTimes(3);

      divElement.removeEventListener('keydown', divResult.handleKeydown);
      divElement.removeEventListener('keyup', divResult.handleKeyup);
    });
  });
});
