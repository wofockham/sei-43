// # Exercises: Objects
//
// ## The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa

const recipe = {
  title: 'Butterscotch',
  servings: 1,
  ingredients: ['butter', 'scotch']
};

console.log(recipe.title);
console.log('Serves:', recipe.servings);
console.log('Ingredients:');

// for (let i = 0; i < recipe.ingredients.length; i++) {
//   console.log( recipe.ingredients[i] );
// }

console.log( recipe.ingredients.join('\n') );


// ## The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const library = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true
  },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: false }
];

for (let i = 0; i < library.length; i++) {
  const book = library[i];
  const bookInfo = `"${ book.title }" by ${ book.author }`;
  if (book.alreadyRead) {
    console.log('You already read ' + bookInfo);
  } else {
    console.log('You still need to read ' + bookInfo);
  }
}


// ## The Movie Database
//
// It's like IMDB, but much much smaller!
//
// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const favoriteMovie = {
  title: 'O Brother! Where Art Thou?',
  duration: 107,
  stars: ['George Clooney', 'John Goodman', 'Gillian Welch', 'That Really Slinty Guy']
};

const ghostbusters = {
  title: 'Ghostbusters',
  duration: 105,
  stars: ['Bill Murray', 'Sigourney Weaver', 'Dan Akroyd']
};

// Local variables
const describeMovie = function (movie) {
  const info = `${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${ movie.stars.join(', ') }.`;
  console.log( info );
}

describeMovie(favoriteMovie);
describeMovie(ghostbusters);
