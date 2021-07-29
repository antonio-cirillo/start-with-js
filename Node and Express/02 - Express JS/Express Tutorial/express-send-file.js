const express = require('express');
const path = require('path');

const server = express();

server.use(express.static('./public'))

server.get('/', (req, res) => {

    res.status(200)
        .sendFile(path.resolve(__dirname, './navbar-app/index.html'));

})

server.listen(5000, () => console.log('Server are listen on port 5000...'));