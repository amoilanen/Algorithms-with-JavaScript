(function(host) {

  function pow(number, power) {
    return Math.pow(number, power);
  }

  host.ch1 = host.ch1 || {};
  host.ch1.pow = pow;
})(this);