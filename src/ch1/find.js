(function(host) {

  function find(elements, toFind) {
    var position = -1;
    var currentIndex = 0;

    while ((currentIndex < elements.length) && (position < 0)) {
      if (elements[currentIndex] == toFind) {
        position = currentIndex;
      }
      currentIndex++;
    }
    return position;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.find = find;
})(this);