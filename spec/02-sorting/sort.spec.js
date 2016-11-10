import { selectionSort } from '../../src/02-sorting/selection.sort.js'
import { bubbleSort } from '../../src/02-sorting/bubble.sort.js'
import { insertionSort } from '../../src/02-sorting/insertion.sort.js'
import { heapSort } from '../../src/02-sorting/heap.sort.js'
import { mergeSort, merge } from '../../src/02-sorting/merge.sort.js'
import { quickSort, partition } from '../../src/02-sorting/quick.sort.js'

describe('chapter2.sort', function() {

  [
    selectionSort,
    insertionSort,
    bubbleSort,
    mergeSort,
    heapSort,
    quickSort
  ].forEach(function(sortFunc) {

    describe(sortFunc.name, function() {

      it('should sort an array', function() {
        expect(sortFunc([6, 0, 4, 3, 9, 8, 7, 1, 2, 5])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });

      it('should sort an array that contains duplicate numbers', function() {
        expect(sortFunc([2, 4, 3, 5, 3, 5, 1, 4, 1, 2])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
      });

      it('should return empty array when called with empty array', function() {
        expect(sortFunc([])).toEqual([]);
      });

      it('should return same array when it consists of one element', function() {
        expect(sortFunc([15])).toEqual([15]);
      });

      it('should sort array that consists of two elements', function() {
        expect(sortFunc([2, 1])).toEqual([1, 2]);
      });

      it('should return same array when it is already sorted', function() {
        expect(sortFunc([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });

      it('should not change array that was provided as argument but create a new one', function() {
        var input = [3, 5, 1, 4, 2];

        expect(sortFunc(input)).toEqual([1, 2, 3, 4, 5]);
        expect(input).toEqual([3, 5, 1, 4, 2]);
      });
    });
  });

  describe('merge', function() {

    it('should merge two presorted subarrays of equal length', function() {
      var arr = [1, 3, 5, 8, 2, 4, 6, 7];

      merge(arr, 0, 4, 8);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should merge two presorted subarrays of different length', function() {
      var arr = [1, 3, 5, 6, 2, 4];

      merge(arr, 0, 4, 6);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should merge two presorted sub-arrays one of which consists of one element', function() {
      var arr = [1, 3, 4, 5, 2];

      merge(arr, 0, 4, 5);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should merge two presorted sub-arrays one of which is empty', function() {
      var arr = [1, 2, 3, 4];

      merge(arr, 0, 4, 4);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should merge two presorted sub-arrays one of which starts with non-zero index', function() {
      var arr = [5, 8, 3, 1, 2, 6, 4, 7];

      merge(arr, 4, 6, 8);
      expect(arr).toEqual([5, 8, 3, 1, 2, 4, 6, 7]);
    });
  });

  describe('partition', function() {
    it('should partition by element in the middle', function() {
      var arr = [9, 7, 8, 1, 4, 2, 5, 6, 3];

      expect(partition(arr, 0, arr.length - 1)).toBe(3);
      expect(arr).toEqual([1, 3, 2, 4, 7, 8, 5, 6, 9]);
    });

    it('should partition one element array', function() {
      var arr = [9];

      expect(partition(arr, 0, 0)).toBe(0);
      expect(arr).toEqual([9]);
    });

    it('should partition empty array', function() {
      var arr = [];

      expect(partition(arr, 0, 0)).toBe((void 0));
      expect(arr).toEqual([]);
    });

    it('should not partition by negative indexes', function() {
      var arr = [9, 7, 8, 1, 4, 2, 5, 6, 3];

      expect(partition(arr, -5, -1)).toBe((void 0));
      expect(arr).toEqual([9, 7, 8, 1, 4, 2, 5, 6, 3]);
    });

    it('should not partition if start index is equal to end index', function() {
      var arr = [9, 7, 8, 1, 4, 2, 5, 6, 3];

      expect(partition(arr, 6, 6)).toBe(6);
      expect(arr).toEqual([9, 7, 8, 1, 4, 2, 5, 6, 3]);
    });

    it('should not partition if start index is greater than end index', function() {
      var arr = [9, 7, 8, 1, 4, 2, 5, 6, 3];

      expect(partition(arr, 7, 6)).toBe((void 0));
      expect(arr).toEqual([9, 7, 8, 1, 4, 2, 5, 6, 3]);
    });

    it('should partition if start and end index in the middle of array', function() {
      var arr = [9, 7, 8, 1, 4, 2, 5, 6, 3];

      expect(partition(arr, 2, 6)).toBe(4);
      expect(arr).toEqual([9, 7, 1, 2, 4, 8, 5, 6, 3]);
    });
  });
});