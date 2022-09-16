import { describe, expect, test } from 'vitest';
import { useClickable } from '../useClickable';

describe('file: useClickable.ts', () => {
  describe('function: useClickable', () => {
    test('should be defined', () => {
      expect(useClickable).toBeDefined();
    });

    test('should support null', () => {
      expect(() => useClickable(null)).not.toThrowError();
    });

    test('should support undefined', () => {
      expect(() => useClickable(undefined)).not.toThrowError();
    });
  });
});
