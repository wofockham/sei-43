// Promises are an evolution of callbacks.
  // a way to handle or process data from an asynchronous process, whenever that process finishes.

// If a library or function uses Promises, you need to use .then() (and .catch())

const fs = require('fs'); // filesystem: standard library of Node.js

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log(content);
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err); // boo
      }

      resolve(content);
    })
  });
};

// readFile('flintstones.txxxt').then((fileContent) => {
//   console.log(fileContent.toLowerCase());
// }).catch((err) => {
//   console.error('Something bad happen', err);
// });

const flinstonesPromise = readFile('flintstones.txt'); // Returns a Promise: { then: ..., catch: ... }

// 1000s of lines of code later

flinstonesPromise.then((c) => {
  console.log(c);
});

setTimeout(() => {
  flinstonesPromise.then((moreFlintstones) => {
    console.log('here they are again later', moreFlintstones);
  });
}, 4000);
