$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
    $("img").show();
  });

  $("img").click(function() {

    alert("This is an image.");
  });
});
