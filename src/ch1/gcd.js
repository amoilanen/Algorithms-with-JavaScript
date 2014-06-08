(function(host) {

  function gcdSlow(x, y) {
    var max = Math.max(x, y);

    for (var i = max; i >= 2; i--) {
      if ((x % i === 0) && (y % i === 0)) {
        return i;
      }
    }
    return 1;
  }

  function gcd(x, y) {
    var r = x % y;

    while (r > 0) {
      x = y;
      y = r;
      r = x % y;
    }
    return y;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.gcd = gcd;
  host.ch1.gcdSlow = gcdSlow;
})(this);