// Import Readline function
const readline = require("readline");
// Create a warpper / interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a function to collect answers
module.exports = (questions, done) => {
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
};
