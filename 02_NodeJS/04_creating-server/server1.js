const http = require('http');

const PORT = 3020;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) =>{
    res.end('Node Server Created By Bharat Kumar!');
});

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})