describe("chapter2.sort", function() {

  ["selectionSort", "insertionSort", "bubbleSort", "mergeSort"].forEach(function(funcName) {

    it(funcName + " should sort an array", function() {
      expect(ch2[funcName]([6, 0, 4, 3, 9, 8, 7, 1, 2, 5])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it(funcName + " should sort an array that contains duplicate numbers", function() {
      expect(ch2[funcName]([2, 4, 3, 5, 3, 5, 1, 4, 1, 2])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it(funcName + " should return empty array when called wit empty array", function() {
      expect(ch2[funcName]([])).toEqual([]);
    });

    it(funcName + " should return same array when it consists of one element", function() {
      expect(ch2[funcName]([15])).toEqual([15]);
    });

    it(funcName + " should sort array that consists of two elements", function() {
      expect(ch2[funcName]([2, 1])).toEqual([1, 2]);
    });

    it(funcName + " should return same array when it is already sorted", function() {
      expect(ch2[funcName]([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it(funcName + " should not change array that was provided as argument but create a new one", function() {
      var input = [3, 5, 1, 4, 2];

      expect(ch2[funcName](input)).toEqual([1, 2, 3, 4, 5]);
      expect(input).toEqual([3, 5, 1, 4, 2]);
    });
  });
});

describe("chapter2.merge", function() {

  it("should merge two presorted subarrays of equal length", function() {
    var arr = [1, 3, 5, 8, 2, 4, 6, 7];

    ch2.merge(arr, 0, 4, 8);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should merge two presorted subarrays of different length", function() {
    var arr = [1, 3, 5, 6, 2, 4];

    ch2.merge(arr, 0, 4, 6);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge two presorted sub-arrays one of which consists of one element", function() {
    var arr = [1, 3, 4, 5, 2];

    ch2.merge(arr, 0, 4, 5);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should merge two presorted sub-arrays one of which is empty", function() {
    var arr = [1, 2, 3, 4];

    ch2.merge(arr, 0, 4, 4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it("should merge two presorted sub-arrays one of which starts with non-zero index", function() {
    var arr = [5, 8, 3, 1, 2, 6, 4, 7];

    ch2.merge(arr, 4, 6, 8);
    expect(arr).toEqual([5, 8, 3, 1, 2, 4, 6, 7]);
  });
});