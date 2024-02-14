// Read = Open + Read

const fs = require("fs");

// const s = fs.openSync("input.txt")
// console.log(s);

console.log("Opening.......");

fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        console.log("Error in opening file: ", err);
    }
    
    console.log("File open successfully!");

    console.log(fd);
});
 