export function insertionSort(elements) {
  var copy = elements.slice(0);
  var toInsert = null;
  var insertIndex = -1;

  for (var i = 1; i < copy.length; i++) {
    toInsert = copy[i];
    insertIndex = i - 1;
    while ((insertIndex >= 0) && (toInsert < copy[insertIndex])) {
      copy[insertIndex + 1] = copy[insertIndex];
      insertIndex--;
    }
    insertIndex++;
    copy[insertIndex] = toInsert;
  }
  return copy;
}
