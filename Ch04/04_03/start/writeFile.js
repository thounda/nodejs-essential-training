// Import the FS module
const fs = require("fs");

// Create some markdown to be written to a file
let md = `
ES6 Template Strings are cool.  They honor whitespace.

* Template Strings
* Node File System
* Readline CLIs

`;

// Write the markdown contents to a file
fs.writeFile("javascript.md", md.trim(), function (err) {
  if (err) {
    throw err;
  }
  // Append to an existing file
  fs.appendFileSync("javascript.md", "\n\n### Node.js is Here!");
  console.log("Markdown Created");
});
