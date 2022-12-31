// The REQUIRE function is used to load NodeJS modules - not required to be installed
const path = require("path"); // Path module is used to isolate a file from full path
const util = require("util"); // util module used to extract details on an object
const v8 = require("v8"); // v8 module provides details on resources - i.e. memory

console.log(path.basename(__filename));
const dirUploads = path.join("www", "files", "uploads"); // Join module is used to create a path (append)
console.log(dirUploads);

util.log(path.basename(__filename)); // more details about the file name
util.log(v8.getHeapCodeStatistics()); // get information on memory stastictics
