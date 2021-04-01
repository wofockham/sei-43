const $links = $('a'); // jQuery collection (kinda an array)
for (let i = 0; i < $links.length; i++) {
  const $link = $( $links[i] );
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  $('<img>').attr('src', thumbnailURL).appendTo($link);
}
