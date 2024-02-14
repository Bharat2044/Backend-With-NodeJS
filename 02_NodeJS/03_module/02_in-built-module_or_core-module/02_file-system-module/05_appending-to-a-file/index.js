/**
 * Append the code to an external file
 */

const fs = require('fs');
console.log(typeof fs);

/**
 * Appending in the sync way
 */
fs.appendFileSync('output1.txt', "I am learning Backend.");


/**
 * Appending in the async way
 */
fs.appendFile('output2.txt', "I am learning Backend.", (err) => {
    if(err) {
        console.log("Error in appending file: ", err);
    }
    else {
        console.log("Appended Successfully!");
    }
});
