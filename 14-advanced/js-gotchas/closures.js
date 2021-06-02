// closures: why?
// let id = 0; // global: bad
// const nextID = function () {
//   return id++;
// };

// closures: demo
// Higher Order Functions
const helloMaker = function () {
  const greeting = 'Hello idiots'; // greeting persists through a closure.

  return function () {
    console.log(greeting);
  };
}

// const hi = helloMaker();
// hi(); // Hello idiots
// console.log(greeting);

// closures: solution
const nextIDMaker = function () {
  let id = 0;
  return function () {
    return id++;
  }
}

const nextID = nextIDMaker();
console.log(nextID()); // 0
console.log(nextID()); // 1
console.log(nextID()); // 2
console.log(nextID()); // 3

// HTML tags (200 or so)
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// };
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// };

const tagMaker = function (tagName) {
  const theTag = tagName;
  return function (content) {
    return `<${ theTag }>${ content }</${ theTag }>`;
  }
};

const h1 = tagMaker('h1');
const h2 = tagMaker('h2');
const h3 = tagMaker('h3');
const p = tagMaker('p');
