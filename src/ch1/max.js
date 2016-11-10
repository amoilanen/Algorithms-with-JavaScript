export function max(elements) {
  var result;

  for (var i = 0; i < elements.length; i++) {
    if (result === undefined || elements[i] > result) {
      result = elements[i];
    }
  }
  return result;
}