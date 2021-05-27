// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then())

// Make this code work:
holdUp(3000).then(() => {
  console.log('Time has passed');
}).then(() => {
  console.log('Wow multiple callbacks');
});

setTimeout(() => {
  console.log('Time has passed');
}, 3000);
