const http = require('http');

const PORT = 3021;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Node Server Created By Bharat Kumar!');
});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})