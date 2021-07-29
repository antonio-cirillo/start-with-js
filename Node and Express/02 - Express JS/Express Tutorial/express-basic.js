const express = require('express');

const server = express();

server.get('/', (req, res) => {

    res.status(200)
        .send('Home page');

})

server.get('/about', (req, res) => {

    res.status(200)
        .send('About page');

})

server.all('*', (req, res) => {

    res.status(404)
        .send('Resource not found');

})

server.listen(5000, () => console.log('Server are listen on port 5000...'));