// set PATH function to constant to use in script
const path = require("path");

// Get path to directory of current location
console.log(__dirname);
// Get the file name using the PATH argument to strip results just to the file name (itself)
console.log(`The file name is ${path.basename(__filename)}`);

// To take a look at the keys within the (NodeJS) global object
for (let key in global) {
  console.log(key);
}
