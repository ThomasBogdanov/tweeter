/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {

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
  renderTweets(data);
});