(function(host) {

  function max(elements) {
    var max;

    for (var i = 0; i < elements.length; i++) {
      if (max == undefined || elements[i] > max) {
        max = elements[i];
      }
    }
    return max;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.max = max;
})(this);