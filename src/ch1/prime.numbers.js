(function(host) {

  function isPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  function primesUpToSlow(number) {
    var primes = [];

    for (var current = 2; current <= number; current++) {
      if (isPrime(current)) {
        primes.push(current);
      }
    }
    return primes;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.primesUpTo = primesUpToSlow;
  host.ch1.primesUpToSlow = primesUpToSlow;
})(this);