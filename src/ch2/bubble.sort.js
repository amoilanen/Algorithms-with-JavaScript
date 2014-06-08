(function(host) {

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function bubbleSort(elements) {
    var copy = elements.slice(0);
    var wasSwapped = true;

    while(wasSwapped) {
      wasSwapped = false;
      for (var i = 1; i < copy.length; i++) {
        if (copy[i - 1] > copy[i]) {
          swap(copy, i - 1, i);
          wasSwapped = true;
        }
      }
    }
    return copy;
  }

  host.ch2 = host.ch2 || {};
  host.ch2.bubbleSort = bubbleSort;
})(this);