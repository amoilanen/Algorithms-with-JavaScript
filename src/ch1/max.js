(function(host) {

  function max(elements) {
    var result;

    for (var i = 0; i < elements.length; i++) {
      if (result === undefined || elements[i] > result) {
        result = elements[i];
      }
    }
    return result;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.max = max;
})(this);