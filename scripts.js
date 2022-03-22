$(document).ready(function() {
  $(".toggle-theme").click(function() {
    $("body").toggleClass("light-theme");
    $("body").toggleClass("dark-theme");
  });

  $("span").click(function() {
    $(this).toggleClass("highlight");
  });
});

