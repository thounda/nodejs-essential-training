// Import Readline function
const readline = require("readline");
// Create a warpper / interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and get answer in console
rl.question("How do you like Node?", (answer) => {
  console.log(`Your answer: ${answer}`);
});
