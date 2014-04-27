$(function(){
  $(".include-chapter").each(function(idx, element) {
    $.get("chapters/chapter" + idx + "/chapter.html", function(chapterHtml) {
      $(element).html(chapterHtml);
    });
  });
});