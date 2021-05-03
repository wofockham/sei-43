// Callbacks Review ////////////////////////////////////////////////////////////

// A callback function is a function PASSED TO another function.
// The passed function gets called for you, later, at some point in time.

// Javascript is asynchronous.

// Timers: A, C, B
console.log('A');
setTimeout(function () {
  console.log('B: Time has passed');
}, 4000);
console.log('C');

// jQuery's document ready: I, III, II
console.log('I');
$(document).ready(function () {
  console.log('II: The document is now ready');
});
console.log('III');

// Event handlers: Groucho, Chicoo AND MAYBE LATER 'Harpo' (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS (yet)
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// colors.each do |c|
//   puts c
// end

// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

// ES6:
// colors.forEach(function (c) {
//   console.log( c );
// });

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log('The next color is', c);
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(`${ brother } Marx`);
});
