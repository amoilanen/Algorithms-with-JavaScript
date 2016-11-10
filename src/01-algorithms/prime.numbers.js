function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function primesUpToSlow(number) {
  var primes = [];

  for (var current = 2; current <= number; current++) {
    if (isPrime(current)) {
      primes.push(current);
    }
  }
  return primes;
}

export function primesUpTo(number) {
  var isPrimeNumber = [];
  var primes = [];
  var current = 2;

  for (var i = 2; i <= number; i++) {
    isPrimeNumber[i] = true;
  }

  while (current <= number) {
    if (isPrimeNumber[current]) {
      primes.push(current);
      for (var j = 2  * current; j <= number; j += current) {
        isPrimeNumber[j] = false;
      }
    }
    current++;
  }
  return primes;
}