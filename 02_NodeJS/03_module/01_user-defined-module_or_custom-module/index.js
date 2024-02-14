/**
 * Bring the logic of adding two numbers
 */

// const sum = require("./myModule.js");
// const sum = require("./myModule");

// console.log(sum);
// console.log(sum(2, 3));


const operations = require("./myModule");

console.log(typeof operations);
console.log(operations);

console.log(operations.add(5, 6));
console.log(operations.prod(5, 6));