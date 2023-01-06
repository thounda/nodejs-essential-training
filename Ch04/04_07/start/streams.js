/* Streams in Node.js give us a way to asynchronously handle continuous data flows. Understanding how streams work can dramatically improve the way your application handles large data. */

// Import FS module
const fs = require("fs");

/*
// Read file, asynchronously - however this method could create latency if long file
fs.readFile("./chat-logs/george-ben-chat.log", "utf-8", (err, chatlog) => {
  console.log(`File Read ${chatlog.length}`);
});
*/

// A better approach is to create a readable stream as follow...
let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "utf-8");

// Define a variable to hold the data (chunks)
let data;
// Structure the data to display via console.log
stream.once("data", (chunk) => {
  console.log(`read stream started`);
  console.log(`==========`);
  console.log(chunk);
});

// Get the length of the stream & concat with text stream
stream.on("data", (chunk) => {
  console.log(`chunk: ${chunk.length}`);
  data += chunk;
});

// Create End event for stream
stream.on("end", () => {
  console.log(`Finished ${data.length}`);
});

//Echo to browser Status before triggering the Callback function
console.log(`Reading the file...`);
