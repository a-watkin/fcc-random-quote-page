$( document ).ready(function() {
    var currentQuote;
    var currentAuthor;

    function openURL(url){
        window.open(url, 
            'Share', 
            'width=550, height=400, toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=0');
    }

    getQuote();

    $("#get-another-quote-button").on("click", function(){
        console.log('hello');
        getQuote();
    });

    function getQuote() {
        $.ajax({
            headers: {
                "X-Mashape-Key": "mtyC8PM1PzmshPEq4FVntooQ9PsXp1IHWyIjsnPSncF7Si9EAn",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://quotes.p.mashape.com/",
            success: function(r) {
            if (typeof r === 'string') {
                r = JSON.parse(r); 
            }

            $("#quote-text").html(r.quote);
            $("#quote-author").html(r.author + " said that:");
            $("#quote-source").html("Quote category: " + r.category);
            console.log(r + ' ' + r.quote);
            console.log(r.author);
            console.log(r.category);

            currentQuote = r.quote;
            currentAuthor = r.author;
            }
        })
    }

  $('#tweet-quote').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
        + encodeURIComponent('"' 
        + currentQuote + '" ' 
        + currentAuthor));
  });
});
