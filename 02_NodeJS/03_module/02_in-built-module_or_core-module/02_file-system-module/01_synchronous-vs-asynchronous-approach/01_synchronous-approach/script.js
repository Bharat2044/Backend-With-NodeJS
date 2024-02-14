const fs = require("fs");

console.log("READ START");

let data = fs.readFileSync('input.txt');

console.log("Synchronous Read Data: ", data.toString());

console.log("READ END");
console.log("OTHER STUFF");