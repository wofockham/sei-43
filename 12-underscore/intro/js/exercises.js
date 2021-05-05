console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];

// each ////////////////////////////////////////////////////////////////////////
// es5 or greater: .forEach

_(nums).each(function (n, index, entireArray) {
  console.log(`n: ${ n }, index: ${ index }, entireArray: ${ entireArray }`);
});

// each() for objects //////////////////////////////////////////////////////////
const sales = {
  January: 15,
  February: 11,
  March: 8
};

_(sales).each(function (total, month) {
  console.log(`${ total } sales in ${ month }.`);
});

// map /////////////////////////////////////////////////////////////////////////
const byNineteen = function (n) {
  return n * 19;
};

const result = _(nums).map(byNineteen);
console.log(result);

// map for objects /////////////////////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
  return `${ total } sales in ${ month }.`;
});
console.log( salesInfo );

// reduce //////////////////////////////////////////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  console.log(`runningTotal: ${ runningTotal }, n: ${ n }`);
  return runningTotal + n;
});

const add = function (a, b) {
  return a + b;
};

const alsoTotal = _(nums).reduce(add);
console.log(alsoTotal);

// .reduce also works for objects //////////////////////////////////////////////

// find ////////////////////////////////////////////////////////////////////////
const divisibleByFive = function (candidate) {
  console.log(`Considering: ${ candidate }, returning: ${candidate % 5 === 0 }`);
  return candidate % 5 === 0;
};

const firstMultipleOfFive = _(nums).find(divisibleByFive);
console.log(firstMultipleOfFive);

// filter //////////////////////////////////////////////////////////////////////
const allMultiplesOfFive = _(nums).filter(divisibleByFive);
console.log(allMultiplesOfFive);

// reject //////////////////////////////////////////////////////////////////////
const notDivisibleByFive = _(nums).reject(divisibleByFive);
console.log(notDivisibleByFive);

// pluck ///////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'sweet'},
  {name: 'Chico', instrument: 'piano', disposition: 'sleazy'},
];

console.table( bros );

const dispositions = _(bros).pluck('disposition');

console.log(dispositions);
