describe("chapter1.gcd", function() {

  ["gcd", "gcdSlow"].forEach(function(funcName) {

    it(funcName + " should return the argument in case both arguments are equal", function() {
      expect(ch1[funcName](12, 12)).toBe(12);
    });

    it(funcName + " should return the smallest number in case one number is divided by another", function() {
      expect(ch1[funcName](48, 24)).toBe(24);
    });

    it(funcName + " should return 1 if the numbers are mutually prime", function() {
      expect(ch1[funcName](30, 77)).toBe(1);
    });

    it(funcName + " should compute the greatest common divisor in case it is smaller than each of the numbers", function() {
      expect(ch1[funcName](210,  2618)).toBe(14);
    });
  });
});