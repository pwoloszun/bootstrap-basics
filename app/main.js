import $ from "jquery";

const url = "templates/01-fiexed-layout.html";

$(function () {
  $(".js-nav a").on("click", function (event) {
    event.preventDefault();
    let $a = $(this);
    let href = $a.attr("href");
    let templateFile;

    if (href.match(/t01/)) {
      templateFile = "01-fiexed-layout.html";
    } else if (href.match(/t02/)) {
      templateFile = "02-fluid-layout.html";
    } else if (href.match(/t03/)) {
      templateFile = "03-responsive-grid.html";
    } else if (href.match(/t04/)) {
      templateFile = "04-js-components.html";
    } else {
      throw "Unknown link";
    }
    $(".js-cont").load(`templates/${templateFile}`);
  });

  $(".js-cont").load(url);
});