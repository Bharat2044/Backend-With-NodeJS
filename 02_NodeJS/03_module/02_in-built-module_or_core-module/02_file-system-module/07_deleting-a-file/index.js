// Deleting an external file
const fs = require('fs');
console.log(typeof fs);

/**
 * Deleting in the sync way
 */
fs.unlinkSync('input1.txt');

/**
 * Deleting in the async way
 */
fs.unlink('input2.txt', function(err) {
    if(err)
        console.log("Error in deleting file", err);
    else
        console.log("Success in deleting file");
})
