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

const $ul = $('<ul></ul>');

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const $li = $(`<li>${ book.title } by ${ book.author }</li>`);

  if (book.alreadyRead) {
    $li.addClass('already-read');
  }

  $ul.append($li);
}

$ul.appendTo('body');
