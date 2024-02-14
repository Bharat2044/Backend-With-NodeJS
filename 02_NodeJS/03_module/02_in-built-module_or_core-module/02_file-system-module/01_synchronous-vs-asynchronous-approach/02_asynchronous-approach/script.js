const fs = require("fs");

console.log("READ START");

fs.readFile('input.txt', function(err, data) {
    if(err) {
        console.log("Error", err);
        return err;
    }

    // console.log("Data: ", data);
    console.log("Asynchronous Read Data: ", data.toString());
    console.log("READ END");
    return data;
})

console.log("OTHER STUFF");
