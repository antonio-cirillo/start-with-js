const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    
    next();
}

const checkQuery = (req, res, next) => {
    const query = req.query;
    console.log(`This is a query object: ${query}`);

    next();
}

app.get('/', logger, checkQuery, (req, res) => {
    res.status(200).send('Home page');
})

app.listen(5000, () => console.log('Server is listening on port 5000...'));