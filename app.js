$(function() {
  $("[data-scroll]").on("click", function(evt) {
    evt.preventDefault();

    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset - 50
    }, 700);
  });
});
