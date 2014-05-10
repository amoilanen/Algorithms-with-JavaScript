(function(host) {

  function gcdSlow(x, y) {
    var max = Math.max(x, y);

    for (var i = max; i >= 2; i--) {
      if ((x % i == 0) && (y % i == 0)) {
        return i;
      }
    }
    return 1;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.gcd = gcdSlow;
  host.ch1.gcdSlow = gcdSlow;
})(this);