document.body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.getElementById('nickname'); // Selection
nickname.innerText = 'The Blade';                     // Manipulation

document.getElementById('favorites').innerText = '13, 23, 7, 5';
document.getElementById('hometown').innerHTML = '<em>Sydney</em>';

const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

const img = document.createElement('img'); // Detached DOM node
img.src = 'http://www.fillmurray.com/500/500';
document.body.appendChild(img); // Attached and so displayed.
