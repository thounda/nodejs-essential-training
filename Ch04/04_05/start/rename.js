// Import FS module using require statement
const fs = require("fs");

// Rename file with renameSync function - be sure to reset file name
// fs.renameSync("./lib/config.js", "./lib/project-config.js");
// console.log(`config.js file is renamed!`);

// Move a file using the asynchronous function
/*
fs.rename("./lib/notes.md", "./notes.md", function (err) {
  // Throw error for display if issues
  if (err) {
    throw err;
  }
  // Else confirm file, successfully, moved to new location
  console.log(`Notes markdown file moved...`);
});
*/

// To remove / delete a file - instantly - use unlinkSync
// fs.unlinkSync("./lib/project-config.js");

// To remove / delete a file, asynchronously - use unlink with callback
/*
fs.unlink("notes.md", function (err) {
  // Throw error if TRUE
  if (err) {
    throw err;
  }
  console.log(`File was deleted!`);
});
*/
