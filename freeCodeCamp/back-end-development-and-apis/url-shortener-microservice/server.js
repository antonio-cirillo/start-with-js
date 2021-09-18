require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const url = require("url");
const URL = url.URL;
const dns = require("dns");

// Basic Configuration
const port = process.env.PORT || 3000;
mongoose.connect(process.env['MONGO_URI']);
const shortURLSchema = new mongoose.Schema({
  original_url: { type: String, required: true },
  short_url: Number
})

const ShortURL = mongoose.model('ShortURL', shortURLSchema);

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/shorturl/:num', (req, res) => {
  ShortURL.findOne({ short_url: req.params.num }, null, null, 
    (err, data) => {
      if(err)
        res.json({"error": "Error...!"});
      if(data == null)
        res.json({"error":"No short URL found for the given input"});
      else
        res.redirect(data.original_url);
  })
})

app.post('/api/shorturl', (req, res) => {
  dns.lookup(url.parse(req.body.url).hostname, (error, address, family) => {
    if(address == null)
    res.json({error: 'invalid url'});
    else {
      ShortURL.countDocuments({}).exec((err, data) => {
        new ShortURL({
          original_url: req.body.url,
          short_url: data + 1
        }).save((err2, data2) => {
          if(err2)
            res.json({"error": "Error...!"});
          else
            res.json({
              original_url: req.body.url,
              short_url: data + 1
            })
        })
      });
    }
  });
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

