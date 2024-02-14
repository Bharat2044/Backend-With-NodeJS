const http = require('http');

// port declaration
const PORT = 3031;

// hostname declaration
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        // res.write("Welcome to Node JS Server by Bharat");
        // res.end();
        res.end("Welcome to Node JS Server by Bharat");
    }
    else if(req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("About Page");
    }
    else if(req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Contact Page");
    }
    else if(req.url === '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        };
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                console.log(data.toString());
            })
        });
        
        apiReq.on("error", () => {
            console.log(e);
        });
        
        apiReq.end();
    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end("Server Error!");
    }
});

// Server listen on port
server.listen(PORT, () => {
    console.log(`Server up at ${HOSTNAME}:${PORT}`);
});