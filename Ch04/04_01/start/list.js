// Import FS module
const fs = require("fs");

// Read the files from current directory, assynchronously
fs.readdir("./", function (err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

// Show how FS waits to fire after other operations such as CL have completed, first
console.log(`Reading File...`);
