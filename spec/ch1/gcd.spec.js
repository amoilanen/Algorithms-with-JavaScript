import {gcd, gcdSlow} from '../../src/ch1/gcd'

describe('chapter1.gcd', function() {

  [gcd, gcdSlow].forEach(function(func) {

    it(func.name + ' should return the argument in case both arguments are equal', function() {
      expect(func(12, 12)).toBe(12);
    });

    it(func.name + ' should return the smallest number in case one number is divided by another', function() {
      expect(func(48, 24)).toBe(24);
    });

    it(func.name + ' should return 1 if the numbers are mutually prime', function() {
      expect(func(30, 77)).toBe(1);
    });

    it(func.name + ' should compute the greatest common divisor in case it is smaller than each of the numbers', function() {
      expect(func(210,  2618)).toBe(14);
    });
  });
});