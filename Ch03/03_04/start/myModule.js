// var to capture value incremented or decremented
let count = 0;

// Constants to Increment & Decrement count
const inc = () => ++count;
const dec = () => --count;

// Getter function to get count
const getCount = () => count;

// Export the content
module.exports = {
  anything: true,
  who: "Bill",
  count,
  inc,
  dec,
  getCount,
};
