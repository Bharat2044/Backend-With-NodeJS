/**
 * Closing the external file
 */

const fs = require('fs');
console.log(typeof fs);

/**
 * Closing in the sync way
 */
// Open the file synchronously
const fd = fs.openSync('output1.txt', 'w');
console.log(fd.toString());
// Close the file synchronously using the file descriptor
fs.closeSync(fd);


/**
 * Closing in the async way
 */
const buf = new Buffer(1024);

fs.open('output2.txt', 'r+', function(err, fd) {
    if(err) {
        console.log("Error in opening file: ", err);
    }

    console.log("File open successfully!");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {        // fs.read(fd, buf, 0, buf.length, 8, function(er, bytes) {
        if(err) 
            console.log("Error in reading filr: ", err);

        console.log("Data: ", bytes);
        console.log("Data: ", buf.slice(0, bytes).toString());

        fs.close(fd, function(err) {        // fs.read(fd, buf, 0, buf.length, 8, function(er, bytes) {
            if(err) 
                console.log("Error in closing file: ", ere);
            else
                console.log("Success in closing file");
        })
    })
});

