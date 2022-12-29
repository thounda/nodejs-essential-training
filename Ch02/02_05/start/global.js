//sends string to the terminal
process.stdout.write("Hello  \n \n");

// create an array of questions using a constant
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language",
];

// Create empty array to capture answers from the questions array
const answers = [];

// Create function named 'ask' to manage the questions and answers
// The argument 'i' is for the index for each of these questions
function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

// Invoke the function to trigger questions to terminal
ask();

// listen for a data event on this object using a function then exit back to terminal prompt
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
// Define  fuction to set message prior to exit to appear prior to last question to be answered
process.on("exit", function () {
  process.stdout.write("n\n\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
});
