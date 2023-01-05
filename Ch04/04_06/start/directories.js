// Import FS module
const fs = require("fs");

// Move folder, synchronously from 'assets' to 'accounts'
// fs.renameSync("./assets/logs", "accounts/logs");
// console.log("logs folder moved...");

// Delete the accounts folder
// fs.rmdir("./assets", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("./assets directory removed");
//   }
// });

// Loop through folder to remove all files then the folder, itself
fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log(`Files Removed`);
// Once all files removed, then remove the directory, synchronously
fs.rmdirSync("./accounts");
console.log("Folder Removed");
