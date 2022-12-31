// Create a wait time for the function using setTimeout
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
  clearInterval(interval);
  console.log("Done");
};

// Callback function to figger event
setTimeout(timerFinished, waitTime);

// Create Interval timer
const waitInterval = 500;
let currentTime = 0;

// Set arrow function to trigger the count
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

// Invoke the arrow function with setInterval to count up to 3 seconds then quit
const interval = setInterval(incTime, waitInterval);
