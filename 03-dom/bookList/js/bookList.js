const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'Good Times',
    author: 'James Kelman',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

const ul = document.createElement('ul'); // Detached DOM node

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const li = document.createElement('li'); // Detached DOM node
  li.innerText = `${ book.title } by ${ book.author }`;

  if (book.alreadyRead) {
    li.className = 'already-read';
  }

  ul.appendChild(li);
}

document.body.appendChild(ul);

// Bonus: Change the style of the book depending on whether you have read it or not.
