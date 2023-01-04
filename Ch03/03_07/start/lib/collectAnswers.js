//collectAnswers.js
// Import Readline function
const readline = require("readline");
// Import EventEmitter from the events module
const { EventEmitter } = require("events");
// Create a warpper / interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a function to collect answers
module.exports = (questions, done) => {
  const answers = []; // Initiaalize empty array

  // Initiate an instance of emitter object
  const emitter = new EventEmitter();

  // Add submitted answers into array
  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  // Ask a question and get answer in console
  rl.question(questions[0], questionAnswered);
  return emitter;
};
