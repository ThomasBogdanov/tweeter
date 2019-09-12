/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json

const renderTweets = function(tweets) {
  $('.tweetContainer').empty();
  tweets.forEach(data => {
      $('.tweetContainer').append(createTweetElement(data));
  });

}

const createTweetElement = function(data) {
  const username = data.user.name;
  const userHandle = data.user.handle;
  const exampleText = data.content.text;
  const date = Date.now();
  const avatar = data.user.avatars;

  return `
  <article class="tweet">
    <header>
      <img src="${avatar}">
      <h5 id="username">${username}</h3>
      <h5 id="userHandle">${userHandle}</h3>
      <text id="exampleText">${exampleText}</text>
    </header>
    <footer id="tweetFooter">
      <text>${date}</text>
    </footer>
  </article>`;


// let $tweet = $('<article>').addClass('tweet');
  
// return $tweet;
};

$(document).ready(function() {
  console.log("App.js ready!")


const formSubmission = $("#formSubmission");

formSubmission.on("submit", (event) => {
  event.preventDefault();

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