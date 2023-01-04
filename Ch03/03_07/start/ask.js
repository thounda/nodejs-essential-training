// Ask.js
// Import module in from lib folder
const collectAnswers = require("./lib/collectAnswers");

// Create questions array to pass into a function
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?",
];

// Create a function to collect answers
const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

//Call the custom event
answerEvents.on("answer", (answer) => console.log(`The answer is ${answer}`));
