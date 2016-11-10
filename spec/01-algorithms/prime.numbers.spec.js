import { primesUpTo, primesUpToSlow } from '../../src/01-algorithms/prime.numbers.js'

describe('chapter1.prime.numbers', function() {

  [primesUpToSlow, primesUpTo].forEach(function(func) {

    it(func.name + ' should return no numbers for 1', function() {
      expect(func(1)).toEqual([]);
    });

    it(func.name + ' should return only 2 for 2', function() {
      expect(func(2)).toEqual([2]);
    });

    it(func.name + ' should return all prime numbers before n > 2, n is not prime', function() {
      expect(func(15)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it(func.name + ' should return all prime numbers before n > 2, n is prime', function() {
      expect(func(5)).toEqual([2, 3, 5]);
    });
  });
});