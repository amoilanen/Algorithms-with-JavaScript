(function(host) {

  function merge(arr, start, middle, end) {
    var sorted = [];
    var i = start;
    var j = middle;

    while((i < middle) && (j < end)) {
      if (arr[i] < arr[j]) {
        sorted.push(arr[i++]);
      } else {
        sorted.push(arr[j++]);
      }
    }
    while (i < middle) {
      sorted.push(arr[i++]);
    }
    while (j < end) {
      sorted.push(arr[j++]);
    }

    i = start;
    while (i < end) {
      arr[i] = sorted[i - start];
      i++;
    }
  }

  function mergeSort(elements) {
    //TODO:
    return elements;
  }

  host.ch2 = host.ch2 || {};
  host.ch2.merge = merge;
  host.ch2.mergeSort = mergeSort;
})(this);