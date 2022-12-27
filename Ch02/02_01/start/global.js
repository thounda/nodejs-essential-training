// Example script to show how NodeJs executed to parse 'let' varibles at runtime
let hello = "Hello World from Node.js";
let justNode = hello.slice(17);
console.log(`Who let the ${justNode} out?`);

/*
In the browser, the global object is called the window. 
But in Node.js, the global object is called global. 

So we want to think about the global object as containing all of the objects, values, and methods that we can use in a Node.js file without having to import anything, directly, into the file from external sources - by default.

The example using 'justNode' show how data can be injected using template literals and other means, directly, within the JS file then called with NodeJs.
*/
