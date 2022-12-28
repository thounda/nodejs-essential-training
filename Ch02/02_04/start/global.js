/*
Standard Input and Standard Output objects offer us a way to communicate with a process while it's running
*/

// Below line sends string to the terminal
process.stdout.write("Hello \n\n");

// Next, we can create an array of questions using a constant
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

// Create empty array to capture answers from the questions array
const answers = [];

// Create function named 'ask' to manage the questions and answers
// The argument 'i' is for the index for each of these questions
function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

// listen for a data event on this object using a function
process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});

// Invoke the questions
ask(answers.length);
