/**
 * Read from an external file
 */

const fs = require('fs');

console.log(typeof fs);

/**
 * Reading in the sync way
 */
console.log("READ START");

const content = fs.readFileSync("input.txt");

// console.log(content);
// console.log("Output content is : " + content);
console.log(content.toString());

console.log("READ END");
console.log("OTHER STUFF");
console.log();

/**
 * Reading in the async way
 */
console.log("READ START");

fs.readFile("input.txt", (err, content) => {
    if(err) {
        return console.log("Error: ", err);
    }

    // console.log(content);
    // console.log("Output content is : " + content);
    console.log(content.toString());
    
    console.log("READ END");
});

console.log("OTHER STUFF");
