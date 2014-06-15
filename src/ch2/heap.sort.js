(function(host) {

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function leftIndex(i) {
    return 2 * i + 1;
  }

  function rightIndex(i) {
    return 2 * i + 2;
  }

  function parentIndex(i) {
    return Math.floor((i + 1) / 2) - 1;
  }

  function heapify(arr, heapSize, index) {
    var left = leftIndex(index);
    var right = rightIndex(index);
    var indexOfMaximum = index;

    [left, right].forEach(function(subTreeRootIndex) {
      if ((subTreeRootIndex < heapSize) && (arr[subTreeRootIndex] > arr[indexOfMaximum])) {
        indexOfMaximum = subTreeRootIndex;
      }
    });
    if (indexOfMaximum != index) {
      swap(arr, index, indexOfMaximum);
      heapify(arr, heapSize, indexOfMaximum);
    }
  }

  function buildHeap(arr, heapSize) {
    var lastNonLeafIndex = parentIndex(heapSize);

    for (var i = lastNonLeafIndex; i >= 0; i--) {
      heapify(arr, heapSize, i);
    }
  }

  function heapSort(elements) {
    var arr = elements.slice(0);
    var heapSize = arr.length;

    buildHeap(arr, heapSize);
    for (var i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapSize--;
      heapify(arr, heapSize, 0);
    }
    return arr;
  }

  host.ch2 = host.ch2 || {};
  host.ch2.heapSort = heapSort;
})(this);