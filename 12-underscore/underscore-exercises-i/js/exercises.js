// # Collections!
//
// Log out the answers to all of the following questions!

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 }
];

// ## Exercises
//
// - Iterate through ` numbers ` and log each number to the console
_(numbers).each(function (n) {
  console.log(n);
});

// - Iterate through ` numbers ` and multiply each one of them by 5
const fives = _(numbers).map(function (n) {
  return n * 5;
});
console.log(fives);

// - Iterate through ` numbers ` and reduce it by adding them together
const add = function (a, b) {
  return a + b;
};

const sum = _(numbers).reduce(add); // .inject &:+
console.log(sum);

// - Get an array of all of the people in ` people ` that have the username "E"
const eUsers = _(people).where({username: 'E'}); // Array
console.table(eUsers);

// - Find the first object in ` people ` that has the id of 3
const user3 = _(people).findWhere({id: 3}); // Single object
console.log(user3);

// - Find the first person who has an age of less than 50
const youngPerson = function (person) {
  return person.age < 50;
};

const youngster = _(people).find(youngPerson);
console.log(youngster);

// - Get an array of all of the people with an age of over 60
const seniors = _(people).select(function (p) {
  return p.age > 60;
});
console.table(seniors);

// - Remove all of the people with an age less than 40
const adults = _(people).reject(function (p) {
  return p.age < 40;
});
console.table(adults);

//
// ## Remember!
//
// You have the [documentation!](https://underscorejs.org/)
