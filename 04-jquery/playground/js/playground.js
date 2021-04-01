$(document).ready(function () {
  $('#name').on('keyup', function () {
    const input = $('#name').val();
    $('header h1').text('Welcome ' + input);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  $(window).on('mousemove', function (event) {
    $('img').css('opacity', 1 - (event.clientY / window.innerHeight)); // Value in the range 0..1
  });
});
