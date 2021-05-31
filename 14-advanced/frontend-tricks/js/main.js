$(document).ready(() => {
  // Cache the DOM elements:
  const $kitty = $('.kitty-js');
  const $body = $('body');

  // Parallax //////////////////////////////////////////////////////////////////
  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $kitty.css('background-position-y', -scrollTop / 5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const { pageX:x, pageY:y } = e; // Destructuring with renaming.
    const size = Math.random() * 10;
    const $bubble = $('<div class="bubble" />').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });
    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 4000, () => {
      $bubble.remove();
    });
  });
});
