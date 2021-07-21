// import http from 'http' ES6 syntax
const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === "/") // Home page
        res.end("Home page");

    if(req.url === "/about") { // About page
        // Blocking code
        for(let i = 0; i < 10000; i++)
            console.log(i);
        res.end("About page");
    }

});

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});