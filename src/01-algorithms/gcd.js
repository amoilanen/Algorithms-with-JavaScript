export function gcdSlow(x, y) {
  var max = Math.max(x, y);

  for (var i = max; i >= 2; i--) {
    if ((x % i === 0) && (y % i === 0)) {
      return i;
    }
  }
  return 1;
}

export const gcd = (x, y) => {
  var r = x % y;

  while (r > 0) {
    x = y;
    y = r;
    r = x % y;
  }
  return y;
}