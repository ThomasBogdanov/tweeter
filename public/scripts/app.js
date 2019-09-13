/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  $('.tweetContainer').empty();
  tweets.forEach(data => {
    $('.tweetContainer').prepend(createTweetElement(data));
  });
};

const finalDatePosted = timeStamp => {
  let date = new Date().getTime();
  let postedTime = (date - Number(timeStamp)) / 1000 / 60 / 60 / 24;
  return Math.floor(postedTime);
};

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
      <img id="heart" src="images/heart-regular.svg">
      <img id="reTweet" src="images/retweet-solid.svg">
      <img id="flag" src="images/flag-solid.svg">
    </footer>
  </article>`;
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  $('.new-tweet').slideUp(100);
  $("#longError").hide();
  $("#noInput").hide();
  console.log("App.js ready!");

  const formSubmission = $("#formSubmission");

  formSubmission.on("submit", (event) => {
    event.preventDefault();

    let inputLength = $("#tweetInput").val().length;
 
    if (inputLength > 140) {
      $("#longError").show();
      return;
    }

    if (inputLength === 0) {
      $("#noInput").show();
      return;
    }
    
    $("#longError").hide();
    $("#noInput").hide();

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
      });
  };
  loadTweets();
});


//Paircoded with Anthony Zhu (thanks for helping me catch-up)
//Code used from KV's lecture for AJAX for POST requests