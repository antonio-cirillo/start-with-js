const http = require('http');
const { readFileSync } = require('fs');

const index = readFileSync('../navbar-app/index.html');
const css = readFileSync('../navbar-app/styles.css');
const script = readFileSync('../navbar-app/browser-app.js');
const image = readFileSync('../navbar-app/logo.svg');

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(index);
        res.end();
    } else if(url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(css);
        res.end();
    } else if(url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(script);
        res.end();
    } else if(url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(image);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found!</h1>');
        res.end();
    }

}).listen(5000, () => console.log('Server are listen on port 5000...'));