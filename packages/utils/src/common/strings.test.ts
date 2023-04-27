import { describe, expect, test } from 'vitest';
import { capitalize, uncapitalize } from './strings';

describe('file: common/strings.ts', () => {
  describe('function: capitalize', () => {
    test('should be defined', () => {
      expect(capitalize).toBeDefined();
    });

    describe('when input is empty string', () => {
      test('should return empty string', () => {
        const input = '';

        expect(capitalize(input)).toBe('');
      });
    });

    describe('when input is not empty string', () => {
      test('should return properly', () => {
        let input = 'hello';

        expect(capitalize(input)).toBe('Hello');
        input = 'world';
        expect(capitalize(input)).toBe('World');
      });
    });
  });

  describe('function: uncapitalize', () => {
    test('should be defined', () => {
      expect(uncapitalize).toBeDefined();
    });

    describe('when input is empty string', () => {
      test('should return empty string', () => {
        const input = '';

        expect(uncapitalize(input)).toBe('');
      });
    });

    describe('when input is not empty string', () => {
      test('should return properly', () => {
        let input = 'HELLO';

        expect(uncapitalize(input)).toBe('hELLO');
        input = 'WORLD';
        expect(uncapitalize(input)).toBe('wORLD');
      });
    });
  });
});
