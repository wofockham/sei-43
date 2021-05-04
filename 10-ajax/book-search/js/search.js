const fetchCover = function (event) {
  event.preventDefault(); // Don't leave this page.
  
  const title = document.getElementById('title').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // not ready yet

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('cover').setAttribute('src', cover);
  };
};

const form = document.getElementById('search-form');
form.addEventListener('submit', fetchCover);
