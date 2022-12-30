// Create a wait time for the function using setTimeout
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => console.log("Done");

// Callback function to figger event
setTimeout(timerFinished, waitTime);
