(function(host) {

  function get(arr, index) {
    return arr[index - 1];
  }

  function set(arr, index, value) {
    arr[index - 1] = value;
  }

  function swap(arr, i, j) {
    var temp = get(arr, i);
    set(arr, i, get(arr, j));
    set(arr, j, temp);
  }

  function leftIndex(i) {
    return 2 * i;
  }

  function rightIndex(i) {
    return 2 * i + 1;
  }

  function parentIndex(i) {
    return Math.floor(i / 2);
  }

  function heapify(arr, heapSize, index) {
    var left = leftIndex(index);
    var right = rightIndex(index);
    var indexOfMaximum = index;

    [left, right].forEach(function(subTreeRootIndex) {
      if ((subTreeRootIndex <= heapSize)
          && (get(arr, subTreeRootIndex) > get(arr, indexOfMaximum))) {
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

    for (var i = lastNonLeafIndex; i >= 1; i--) {
      heapify(arr, heapSize, i);
    }
  }

  function heapSort(elements) {
    var arr = elements.slice(0);
    var heapSize = arr.length;

    buildHeap(arr, heapSize);
    for (var i = arr.length; i > 1; i--) {
      swap(arr, 1, i);
      heapSize--;
      heapify(arr, heapSize, 1);
    }
    return arr;
  }

  host.ch2 = host.ch2 || {};
  host.ch2.heapSort = heapSort;
})(this);