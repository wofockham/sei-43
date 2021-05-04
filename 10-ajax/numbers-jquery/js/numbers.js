const fetchFact = function () {
  // Deferred syntax (which inspired the Promises syntax)
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
    $('<p>').text(info.text).appendTo('body');
  });
};

$('#fetch').on('click', fetchFact);
fetchFact();
