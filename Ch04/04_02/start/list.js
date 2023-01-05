// Import FS module
const fs = require("fs");

/* Read file synchronously - ensure all lines comment out if reading file, asynchronously */
// let ipsum = fs.readFileSync("./readme.md", "utf-8");
//  console.log(ipsum);

// Read file asynchronously - ensure all line comment out if running file synchronous method.
fs.readFile("./readme.md", "utf-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("reading the file...");
