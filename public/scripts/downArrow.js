$(() => {
  $(".downArrow").on("click", function() {
    const input = $('.new-tweet');
    const textInput = $('textarea');
    if (input.css('display') === 'none') {
      input.slideDown(100);
      textInput.focus();
    } else {
      input.slideUp(100);
    }
  });
});