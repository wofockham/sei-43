$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette'); // $('.palette').append($swatch);
  });

  // Event delegation: listen for events on future DOM elements.
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // Event delegation: listen for events via the parent for efficiency.
  $('.canvas').on('mouseover', '.pixel', function (e) {
    if (e.shiftKey === false) return;
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
