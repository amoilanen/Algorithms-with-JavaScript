(function(host) {

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, start, end) {
    if (start > end || end >= arr.length
      || start < 0 || end < 0) {
      return;
    }

    var middleIndex = Math.floor((start + end) / 2);
    var storeIndex = start;

    swap(arr, middleIndex, end);

    for (var i = start; i < end; i++) {
      if (arr[i] < arr[end]) {
        swap(arr, storeIndex, i);
        storeIndex++;
      }
    }
    swap(arr, storeIndex, end);
    return storeIndex;
  }

  function sort(arr, start, end) {
    if (start < end) {
      var partitionIndex = partition(arr, start, end);
      sort(arr, start, partitionIndex - 1);
      sort(arr, partitionIndex + 1, end);
    }
  }

  function quickSort(elements) {
    var copy = elements.slice(0);

    sort(copy, 0, copy.length - 1);
    return copy;
  }

  host.ch2 = host.ch2 || {};
  host.ch2.partition = partition;
  host.ch2.quickSort = quickSort;
})(this);