// await/async: an evolution of Promises
const fs = require('fs');

// Promise wrapper for readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err);
      }

      resolve(content);
    })
  });
};

// Thennable (code that uses Promises):
readFile('flintstones.txt').then((data) => {
  console.log('here is the data', data);
});

const printFlintstones = async () => {
  const data = await readFile('flintstones.txt');
  console.log('awaited data:', data);
};
printFlintstones();

const alsoPrint = async function () {
  const data = await readFile('flintstones.txt');
  console.log(data);
};

// axios ///////////////////////////////////////////////////////////////////////
const axios = require('axios');

// axios.get returns a Promise
axios.get('http://numbersapi.com/random/trivia').then((result) => {
  console.log('Number trivia', result.data);
});

const numberFact = async () => {
  const result = await axios.get('http://numbersapi.com/random/trivia');
  console.log(result.data);
};
numberFact();
