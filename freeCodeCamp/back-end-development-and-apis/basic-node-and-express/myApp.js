var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();

console.log("Hello World");

function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}

function handler(req, res) {
    res.json({name: `${req.query.first} ${req.query.last}`});
}

function handler_2(req, res) {
    console.log(req.body);
    res.json({name: `${req.body.first} ${req.body.last}`})
}

app.use(logger, bodyParser.urlencoded({extend: false}));

// app.route('/name').get(handler).post(handler);S
app.route('/name').get(handler_2).post(handler_2);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase")
        res.json({message: "HELLO JSON"});
    else
        res.json({message: "Hello json"});
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time})
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word});
})

app.get('/', (req, res) => {
    res.send('Hello Express');
})

module.exports = app;