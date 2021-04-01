// document.body.style.fontFamily = 'Arial, sans-serif';

$('body').css('font-family', 'Arial, sans-serif');
// $('body').css({'font-family': 'Arial, sans-serif', 'color': 'pink'});

// const nickname = document.getElementById('nickname'); // Selection
// nickname.innerText = 'The Blade';                     // Manipulation

const $nickname = $('#nickname'); // Hungarian Notation
$nickname.text('The Blade');

// document.getElementById('favorites').innerText = '13, 23, 7, 5';
// document.getElementById('hometown').innerHTML = '<em>Sydney</em>';

$('#favorites').text('13, 23, 7, 5');
$('#hometown').html('<em>Sydney</em>');

// const items = document.getElementsByTagName('li');
// for (let i = 0; i < items.length; i++) {
//   items[i].className = 'listitem';
// }

$('li').addClass('listitem');

// const img = document.createElement('img'); // Detached DOM node
// img.src = 'http://www.fillmurray.com/500/500';
// document.body.appendChild(img); // Attached and so displayed.

$('<img src="http://www.fillmurray.com/500/500">').appendTo('body');
