const fetchCover = function (event) {
  event.preventDefault(); // Don't leave this page.

  const title = $('#title').val();

  $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + title).done(function (data) {
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  });
};

$(document).ready(function () {
  $('#search-form').on('submit', fetchCover);
});
