// set constant to require 'events'
const events = require("events");
const { emit } = require("process");

// Define a new event emitter
let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// Emit the events
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's cool", "Thounda");

// Capture any inbound data with Standard Input
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  // Exit out of terminal if condition TRUE
  if (input === "exit") {
    emitter.emit("customEvent, Goodbye!", "process");
    process.exit();
  }
  // Log input with 'Terminal' label
  emitter.emit("customEvent", data.toString().trim(), "terminal");
});
