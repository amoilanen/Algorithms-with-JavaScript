describe("pow", function() {

  it("should keep 1 unchanged", function() {
    expect(ch1.pow(1, 4)).toBe(1);
  });

  it("should be 1 when the power is 0", function() {
    expect(ch1.pow(3, 0)).toBe(1);
  });

  it("should compute the odd power", function() {
    expect(ch1.pow(5, 3)).toBe(125);
  });

  it("should compute the even power", function() {
    expect(ch1.pow(2, 10)).toBe(1024);
  });
});