import { max } from '../../src/ch1/max'

describe("chapter1.max", function() {

  it("should return maximum among several elements", function() {
    expect(max([2, 1, 4, 2, 3])).toBe(4);
  });

  it("should return single element for single element array", function() {
    expect(max([3])).toBe(3);
  });

  it("should return undefined when called with empty array", function() {
    expect(max([])).toBe(undefined);
  });
});