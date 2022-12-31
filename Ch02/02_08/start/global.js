// Create a wait time for the function using setTimeout
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
  clearInterval(interval);
  console.log(`\nDone!`);
};

// Callback function to figger event
setTimeout(timerFinished, waitTime);

// Create Interval timer
const waitInterval = 500;
let currentTime = 0;

// Set arrow function to trigger the count which now reports data to the terminal
const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitInterval) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}`);
};

// Invoke the arrow function with setInterval to count up to 3 seconds then quit
const interval = setInterval(incTime, waitInterval);
