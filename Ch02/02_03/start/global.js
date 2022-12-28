// Show what is available in the NodeJS Process object
// console.log(process.argv);

// Create a function, below, to grab flag set in the 'process' object array
function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

// Trigger the function on two LET variables to get results
let greeting = grab("--greeting");
let user = grab("--user");
console.log(greeting);
console.log(user);

// To test the function enter the following line in terminal (CLI)
// node global --user John --greeting "Hello from NodeJs"
