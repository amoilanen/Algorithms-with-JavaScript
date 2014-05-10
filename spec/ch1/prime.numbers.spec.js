describe("prime.numbers", function() {

  ["primesUpToSlow", "primesUpTo"].forEach(function(funcName) {

    it(funcName + " should return no numbers for 1", function() {
      expect(ch1[funcName](1)).toEqual([]);
    });

    it(funcName + " should return only 2 for 2", function() {
      expect(ch1[funcName](2)).toEqual([2]);
    });

    it(funcName + " should return all prime numbers before n > 2, n is not prime", function() {
      expect(ch1[funcName](15)).toEqual([3, 5, 7, 11, 13]);
    });

    it(funcName + " should return all prime numbers before n > 2, n is prime", function() {
      expect(ch1[funcName](5)).toEqual([3, 5]);
    });
  });
});