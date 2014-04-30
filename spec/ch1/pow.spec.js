describe("pow", function() {

  ["powSlow", "pow"].forEach(function(funcName) {

    it(funcName + " should keep 1 unchanged", function() {
      expect(ch1[funcName](1, 4)).toBe(1);
    });

    it(funcName + " should be 1 when the power is 0", function() {
      expect(ch1[funcName](3, 0)).toBe(1);
    });

    it(funcName + " should compute the odd power", function() {
      expect(ch1[funcName](5, 3)).toBe(125);
    });

    it(funcName + " should compute the even power", function() {
      expect(ch1[funcName](2, 10)).toBe(1024);
    });
  });
});