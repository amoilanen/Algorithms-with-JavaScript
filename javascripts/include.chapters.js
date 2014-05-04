$(function(){
  var includes = $(".include-chapter").toArray();

  $.when.apply($, includes.map(function(element, idx) {
    return $.get("chapters/chapter" + idx + "/chapter.html");
  })).then(function() {
    var chaptersHtml = [].slice.call(arguments, 0);

    chaptersHtml.forEach(function(chapterHtml, idx) {
      var includesElement = $(includes[idx]);

      includesElement.html(chapterHtml[0]);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, includesElement[0]]);
    });
    Prism.highlightAll();
  });
});