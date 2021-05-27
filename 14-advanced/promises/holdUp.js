// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then())

// YOUR CODE HERE
const holdUp = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Make this code work:
holdUp(3000).then(() => {
  console.log('Time has passed');
}).then(() => {
  console.log('Wow multiple callbacks');
});
