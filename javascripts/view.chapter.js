$(function() {
  var chapterId = $.url("?chapter");
  var title = "Algorithms with JavaScript. Chapter " + chapterId + ".";
  var url = "http://antivanov.github.io/Algorithms-with-JavaScript/view.chapter.html?chapter=" + chapterId;

  $("#twitter-button")
    .attr("data-url", url)
    .attr("data-text", title);

  document.title = title;

  $.get("chapters/chapter" + chapterId + "/chapter.html").then(function(html) {
    $("#chapter-placeholder").html(html);
    Prism.highlightAll();
  });
});