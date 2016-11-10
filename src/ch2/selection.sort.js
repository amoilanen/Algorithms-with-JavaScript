function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function selectionSort(elements) {
  var copy = elements.slice(0);
  var remainingMinimum = null;
  var indexToSwap = -1;

  for (var i = 0; i < copy.length - 1; i++) {
    remainingMinimum = copy[i];
    indexToSwap = -1;
    for (var j = i + 1; j < copy.length; j++) {
      if (copy[j] < remainingMinimum) {
        remainingMinimum = copy[j];
        indexToSwap = j;
      }
    }
    if (indexToSwap >= 0) {
      swap(copy, i, indexToSwap);
    }
  }
  return copy;
}