$(document).ready(function() {
  var currentQuote;
  var currentAuthor;

  function openURL(url) {
    window.open(
      url,
      "Share",
      "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
    );
  }

  function getQuote() {
    fetch(`https://api.github.com/zen`, {
      headers: {
        "Content-Type": "application/json",
        username: "389fcce7c8a1352976f33821bd4223aad7f50df8"
      }
    }).then(function(res) {
      console.log(res, res.json());
    });
  }

  $("#get-another-quote-button").on("click", function() {
    getQuote();
  });

  $("#tweet-quote").on("click", function() {
    openURL(
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  });
});
