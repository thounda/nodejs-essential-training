// Import the FS module
const fs = require("fs");

// Check if the directory already exist
if (fs.existsSync("your-files-here")) {
  console.log("Directory already exist!");
} else {
  // Use asynchronous mkdir method
  fs.mkdir("your-files-here", function (err) {
    // Console.log error if TRUE
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      // Echo the message on confirmation
      console.log("directory created");
    }
  });
}
