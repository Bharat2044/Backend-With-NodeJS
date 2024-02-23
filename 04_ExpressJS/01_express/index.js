const express = require('express');

console.log(typeof express);    // function

const app = express();

/**
 * See a req - res cycle
 */
app.get("/", (req, res) => {
    // res.send("Hello from the Express Server");
    res.send("<h1>Hello from the Express Server</h1>");
})


/**
 * Starting the express server
 */
app.listen(8000, () => {
    console.log("Server got started");
});
