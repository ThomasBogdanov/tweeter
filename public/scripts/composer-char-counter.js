let maxCount = 140;
$(document).ready(function() {
  console.log("composer ready!");
  $("#tweetInput").on('input', function() {
    let charCount = $(this).val().length;
    console.log(charCount);
    let currentCount = maxCount - charCount;
    console.log(currentCount);
    if (currentCount < 0) {
      $(".counter").css('color', 'red');
    } else {
      $(".counter").css('color', 'black');
    }
    $(".counter").text(currentCount);
  });
});

  