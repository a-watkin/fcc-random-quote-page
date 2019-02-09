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
    fecth(url)
      .then(response.something) // Define response type (JSON, Headers, Status codes)
      .then(data); // get the response type

    // Practical example
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => console.log(JSON.stringify(data)));
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
