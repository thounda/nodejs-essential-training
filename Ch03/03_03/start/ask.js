// Import Readline function
const readline = require("readline");
// Create a warpper / interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create questions array to pass into a function
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?",
];

// Create a function to collect answers
function collectAnswers(questions, done) {
  const answers = []; // Initiaalize empty array

  // Add submitted answers into array
  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  // Ask a question and get answer in console
  rl.question(questions[0], questionAnswered);
}

// Invoke the function
collectAnswers(questions, (answers) => {
  console.log(`Thank you for your answers`);
  console.log(`${answers}`);
  process.exit(); // Exit the function returning back to terminal prompt
});
