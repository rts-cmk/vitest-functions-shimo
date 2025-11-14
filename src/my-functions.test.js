import { describe, expect, it } from 'vitest';
import {
  calculateSum,
  checkIfPrime,
  findMaximumNumber,
  removeDuplicateElements,
} from './my-functions.js';

describe('calculateSum', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(calculateSum(1, 2)).toBe(3);
  });

  it('should return -2 when adding -1 and -1', () => {
    expect(calculateSum(-1, -1)).toBe(-2);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(calculateSum(0, 0)).toBe(0);
  });
});

describe('checkIfPrime', () => {
  it('should return true for prime numbers', () => {
    expect(checkIfPrime(2)).toBe(true);
    expect(checkIfPrime(3)).toBe(true);
    expect(checkIfPrime(13)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(checkIfPrime(1)).toBe(false);
    expect(checkIfPrime(4)).toBe(false);
    expect(checkIfPrime(15)).toBe(false);
  });

  it('should return false for zero, negative and non-integers', () => {
    expect(checkIfPrime(0)).toBe(false);
    expect(checkIfPrime(-5)).toBe(false);
    expect(checkIfPrime(10.5)).toBe(false);
  });
});

describe('findMaximumNumber', () => {
  it('should return the largest number from a positive array', () => {
    expect(findMaximumNumber([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should work with negative numbers', () => {
    expect(findMaximumNumber([-10, -5, -3])).toBe(-3);
  });

  it('should return the only element for single-element arrays', () => {
    expect(findMaximumNumber([42])).toBe(42);
  });
});

describe('removeDuplicateElements', () => {
  it('should return [1, 2, 3, 4, 5] when removing duplicates from [1, 2, 2, 3, 4, 4, 5]', () => {
    expect(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it('should return [1] when removing duplicates from [1, 1, 1, 1]', () => {
    expect(removeDuplicateElements([1, 1, 1, 1])).toStrictEqual([1]);
  });

  it('should return [5, 4, 3, 2, 1] when removing duplicates from [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]', () => {
    expect(
      removeDuplicateElements([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]),
    ).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
