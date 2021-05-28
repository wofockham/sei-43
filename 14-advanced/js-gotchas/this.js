// `this` lets us access the current object (from inside a method)
// without needing to know the name of the variable containing the object.

const groucho = {
  fullname: 'Groucho Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.fullname;
  }
};

console.log('Calling the method:', groucho.greeting());

// What if we copy the method from inside the object?
// (Change it from a method to a function)

const unboundGreeting = groucho.greeting;
console.log('Calling the function:', unboundGreeting()); // Undefined.

// bind() //////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log('Calling the bound function', boundGreeting()); // Groucho Marx

const otherGreeting = groucho.greeting.bind({ fullname: 'Faith Marx', residence: 'Sydney' });
console.log('Calling bound to a new object', otherGreeting());

// call() //////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call(groucho) );
console.log( unboundGreeting.call( {fullname: 'Faith Marx'} ));

// apply() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.apply(groucho) ); // Same as call.

const numbers = [23, 54, 6, 9, 2, 1];
Math.max(numbers); // NaN

// Classical fix:
Math.max.apply(Math, numbers); // 54

// Modern fix (ES6):
Math.max(...numbers); // spread operator
