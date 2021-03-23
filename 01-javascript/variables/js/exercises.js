// # Exercises: Variables
//
// ## The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// - Store the following into variables: number of children, partner's name, geographic location, job title.
// - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numKids = 6;
const partnerName = 'Eric';
const geoLocation = 'Argentina';
const jobTitle = 'mortician';

// Classic JS
// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numKids + ' kids.';
// console.log(fortune);

// ES6: Interpolation
const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`;
console.log(fortune);

// ## The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2021;
const birthYear = 1987;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

const ageMessage = `They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }.`;
console.log(ageMessage);

// ## The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 36;
const deathAge = 84;
const amountPerDay = 11; // cheesecakes

const amountPerYear = amountPerDay * 365.25; // leap years
const yearsRemaining = deathAge - currentAge;

const amountRequired = amountPerYear * yearsRemaining;
console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);

// ## The Geometrizer
//
// Calculate properties of a circle, using [the definitions here](http://math2.org/math/geometry/circles.htm).
//
// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

const radius = 1;
const circumference = 2 * radius * Math.PI; // diameter * PI
console.log(`The circumference is ${ circumference }`);
const area = Math.PI * radius * radius; // PI * r ^ 2
console.log(`The area is ${ area }`);

// ## The Temperature Converter
//
// It's hot out! Let's make a converter based on [the steps here](http://www.mathsisfun.com/temperature-conversion.html).
//
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const currentTemperature = 18;
const fahrenheit = currentTemperature * 1.8 + 32;
console.log(`${ currentTemperature }°C is ${ fahrenheit }°F`);

const celsius = (fahrenheit - 32) / 1.8;
console.log(`${ fahrenheit }°F is ${ celsius }°C`);
