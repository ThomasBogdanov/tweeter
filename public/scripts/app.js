/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json

const renderTweets = function(tweets) {
  $('.tweetContainer').empty();
  tweets.forEach(data => {
      $('.tweetContainer').prepend(createTweetElement(data));
  });

}

const finalDatePosted = timeStamp => {
  let date = new Date().getTime();
  let postedTime = (date - Number(timeStamp)) / 1000 / 60 / 60 / 24;
  return Math.floor(postedTime)
}

const createTweetElement = function(data) {
  const username = data.user.name;
  const userHandle = data.user.handle;
  const exampleText = escape(data.content.text);
  const avatar = data.user.avatars;
  const createdAt = finalDatePosted(data.created_at);


  return `
  <article class="tweet">
    <header>
      <img src="${avatar}">
      <h5 id="username">${username}</h3>
      <h5 id="userHandle">${userHandle}</h3>
      <text id="exampleText">${exampleText}</text>
    </header>
    <footer id="tweetFooter">
      <text>${createdAt} Days Ago</text>
    </footer>
  </article>`;


// let $tweet = $('<article>').addClass('tweet');
  
// return $tweet;
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


$(document).ready(function() {
  console.log("App.js ready!")


const formSubmission = $("#formSubmission");

formSubmission.on("submit", (event) => {
  event.preventDefault();

  let inputLength = $("#tweetInput").val().length;

  if (inputLength > 140) {
    alert("Tweet input is too long!");
    return;
  };

  if (inputLength === 0) {
    alert("You can't post empty tweets!");
    return;
  }

  $.ajax({
    url: '/tweets',
    type: 'POST',
    data: formSubmission.serialize()
  })
  .then(loadTweets);
  $("#tweetInput").val('');
});

const loadTweets = function() {
  $.ajax({ url: "/tweets"})
    .then(tweets => {
      renderTweets(tweets);
    })
  };
  loadTweets();
});


//Paircoded with Anthony Zhu (thanks for helping me catch-up)
//Code used from KV's lecture for AJAX for POST requests