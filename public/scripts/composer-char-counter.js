let maxCount = 140;
$(document).ready(function() {
  console.log("composer ready!");
  $("#tweetInput").on('input', function() {
    let charCount = $(this).val().length;
    let currentCount = maxCount - charCount;
    if (currentCount < 0) {
      $(".counter").css('color', 'red');
    } else {
      $(".counter").css('color', 'black');
    }
    $(".counter").text(currentCount);
  });
});

  