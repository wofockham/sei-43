const state = {
  nextPage: 1,
  lastPageReached: false,
  requestInProgress: false
};

const searchFlickr = function (keywords) {

  if (state.lastPageReached || state.requestInProgress) {
    return; // Bail out.
  }

  console.log('Searching for', keywords);

  state.requestInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    console.log(info);
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
    state.requestInProgress = false;
  });

};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title}); // .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to the server.

    $('#images').empty();
    state.nextPage = 1;
    state.lastPageReached = false;

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  // Very twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

    if (scrollBottom < 400) {
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms); // page 1 again: HW: get the next page
    }
  });
});
