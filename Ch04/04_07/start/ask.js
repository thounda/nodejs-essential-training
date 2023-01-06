// Define list of questions in array
let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

// Define emptry array for answers
let answers = [];
// Standard Output to write data (streams) to the terminal - take user input
function ask(i) {
  process.stdout.write(`\n\n\n\n  ${questions[i]}`);
  process.stdout.write(`  >  `);
}
// Standard Input (readable stream) to push captured data into array
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  // Conditional logic to check for pending questions or exit process
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// Callback function to execute once all questions are answered
process.on("exit", function () {
  process.stdout.write("\n\n\n\n  ");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`
  );
  process.stdout.write("\n\n\n\n");
});

// Invoke function
ask(answers.length);
