(function(host) {

  function find(arr, element) {
    var position = -1;
    var currentIndex = 0;

    while ((position < 0) && (currentIndex < arr.length)) {
      if (arr[currentIndex] == element) {
        position = currentIndex;
      } else {
        currentIndex++;
      }
    }
    return position;
  }

  host.ch1 = host.ch1 || {};
  host.ch1.find = find;
})(this);