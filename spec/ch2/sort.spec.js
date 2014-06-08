describe("chapter2.sort", function() {

  ["selectionSort", "insertionSort", "bubbleSort"].forEach(function(funcName) {

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