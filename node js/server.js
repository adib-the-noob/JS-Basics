const http = require('http');

// Create a server object:
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
    }if (req.url === '/about') {
        res.write(
            'This is the about page');
    }
    res.end(
        `<h1>OOps!</h1>`
    )
});

server.listen(5000);
console.log('Server is listening on port 5000');