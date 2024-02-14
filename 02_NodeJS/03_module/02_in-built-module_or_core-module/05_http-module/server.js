const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<h1>Hello, Node.js!</h1>');
    } else if(req.url === '/home') {
        res.write('<h1>Home Page!</h1>');
    } else if(req.url === '/about') {
        res.write('<h1>About Page!</h1>');
    } else if(req.url === '/contact') {
        res.write('<h1>About Page!</h1>');
    } else {
        res.write('<h1>You are trying to hitn a wrong url</h1>');
    }

    res.end();
});

// server.listen(5001);
// console.log("The HTTP server is running on port 5001");

server.listen(5001, () => {
    console.log("The HTTP server is running on port 5001");
});
