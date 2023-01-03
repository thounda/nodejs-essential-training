// import the entire external file into local script
const myModule = require("./myModule");

// Display variable from imported file
console.log(myModule.anything);
console.log(myModule.inc());

// or just specific variables but not the entire file
const { inc, dec, getCount } = require("./myModule");

// individual vars can be called without included const name
inc();
inc();
inc();
inc();

// View count after parsing lines above
console.log(`the count is ${getCount()}`);
