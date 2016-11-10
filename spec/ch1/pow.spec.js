import { pow, powSlow } from '../../src/ch1/pow'

describe("chapter1.pow", function() {

  [powSlow, pow].forEach(function(func) {

    it(func.name + " should keep 1 unchanged", function() {
      expect(func(1, 4)).toBe(1);
    });

    it(func.name + " should be 1 when the power is 0", function() {
      expect(func(3, 0)).toBe(1);
    });

    it(func.name + " should compute the odd power", function() {
      expect(func(5, 3)).toBe(125);
    });

    it(func.name + " should compute the even power", function() {
      expect(func(2, 10)).toBe(1024);
    });
  });
});