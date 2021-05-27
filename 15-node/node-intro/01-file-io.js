// recreate `cat` in JS

const fs = require('fs'); // This is from the built-in Node.js Standard Library.

// Synchronous: Wrongissimo
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log( fileData );

// Asynchronous:

// Many asynchronous Node.js functions implement the Error First pattern:
fs.readFile('simpsons.txxxt', 'utf-8', function (error, fileData) {
  if (error) {
    return console.error(error); // A bit wanky
  }
  console.log(fileData);
});
