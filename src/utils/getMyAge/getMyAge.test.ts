import { describe, it, expect, vi } from 'vitest';
import { getMyAge } from './getMyAge';

describe('getMyAge', () => {
  const testCases = [
    { currentDate: new Date('2003-01-09'), expected: 0 },
    { currentDate: new Date('2003-01-10'), expected: 0 },
    { currentDate: new Date('2004-01-09'), expected: 1 },
    { currentDate: new Date('2010-01-01'), expected: 7 },
    { currentDate: new Date('2020-06-15'), expected: 17 },
    { currentDate: new Date('2023-12-31'), expected: 20 },
    { currentDate: new Date('2030-05-20'), expected: 27 },
    { currentDate: new Date('2031-03-15'), expected: 28 },
    { currentDate: new Date('2032-07-10'), expected: 29 },
    { currentDate: new Date('2040-11-01'), expected: 37 },
    { currentDate: new Date('2043-03-22'), expected: 40 },
    { currentDate: new Date('2050-06-30'), expected: 47 },
    { currentDate: new Date('2055-12-31'), expected: 52 },
    { currentDate: new Date('2060-08-16'), expected: 57 },
    { currentDate: new Date('2065-04-09'), expected: 62 },
    { currentDate: new Date('2070-01-01'), expected: 67 },
  ];

  for (const { currentDate, expected } of testCases) {
    it(`should return ${expected} when system date is ${currentDate.toISOString()}`, () => {
      // Simulate the current date
      vi.useFakeTimers({ now: currentDate });
      // Call getMyAge and verify that it returns the expected age.
      expect(getMyAge()).toBe(expected);
      // Restore real timers after the test
      vi.useRealTimers();
    });
  }
});
