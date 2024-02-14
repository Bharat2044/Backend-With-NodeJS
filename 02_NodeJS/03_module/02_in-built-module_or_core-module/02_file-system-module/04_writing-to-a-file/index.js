/**
 * Write the code to an external file
 */

const fs = require('fs');
console.log(typeof fs);

/**
 * Writing in the sync way
 */
fs.writeFileSync('output1.txt', "I am learning Backend.");


/**
 * Writing in the async way
 */
fs.writeFile('output2.txt', "I am learning Backend.", (err) => {
    if(err) 
        console.log("Error in writing file: ", err);
    else
        console.log("Written Successfully!");
});
