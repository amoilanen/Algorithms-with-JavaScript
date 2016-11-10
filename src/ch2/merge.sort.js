export function merge(arr, start, middle, end) {
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

export function mergeSort(elements) {
  var copy = elements.slice(0);
  var step = 1;
  var start = -1;
  var middle = -1;
  var end = -1;

  while(step < copy.length) {
    step = step * 2;
    for (start = 0; start < copy.length; start = start + step) {
      middle = Math.min(start + step / 2, copy.length);
      end = Math.min(start + step, copy.length);

      merge(copy, start, middle, end);
    }
  }
  return copy;
}