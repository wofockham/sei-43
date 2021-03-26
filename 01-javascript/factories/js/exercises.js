// Factories: Mass Produced Objects

const catFactory = function (n, a, f) { // name, age, furColor
  return {
    name: n,
    age: a,
    furColor: f,
    carnivore: true,
    meow: function () {
      console.log('Meow, my name is ' + this.name);
    },
    eat: function (food) {
      console.log(`Yum, I love to eat ${ food }`);
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white') // right shape!
];

console.table(cuteCats);

for (let i = 0; i < cuteCats.length; i++) {
  console.log( `${ cuteCats[i].name } is ${ cuteCats[i].furColor }` );
}

// Prototypal Inheritance: Prototypes
// Historically interesting but not essential.
// Probably don't use these.

// Constructor (similar to a factory but with more magic)
const Cat = function (n, a, f) {
  // No need to create an object: an object is already there for you and it's called "this"
  this.name = n;
  this.age = a;
  this.furColor = f;
  // No need to return the object: `this` gets returned automagically.
}

const cooper = new Cat('Cooper', 5, 'tabby');
const audrey = new Cat('Audrey', 5, 'tabby');

// The main advantage
// You can "extend the prototype" AFTER you create your "instances".
console.log( cooper.carnivore ); // undefined
Cat.prototype.carnivore = true; // extend the prototype
console.log( cooper.carnivore ); // true
