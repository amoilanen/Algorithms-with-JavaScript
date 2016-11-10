export function powSlow(number, power) {
  var result = 1;
  for (var i = 0; i < power; i++) {
    result = result * number;
  }
  return result;
}

export function pow(number, power) {
  var result = 1;

  while (power > 0) {
    if (power % 2 === 0) {
      number = number * number;
      power = power / 2;
    } else {
      result = result * number;
      power = power - 1;
    }
  }
  return result;
}