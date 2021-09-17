// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", (req, res) => {
  const data = req.params.date;
  console.log(data);
  if(/\d{5,}/.test(data))
      res.json({ unix: parseInt(data), utc: new Date(parseInt(data)).toGMTString() });
    else {
      const flag = Date.parse(data);
      if(isNaN(flag))
        res.json({error: 'Invalid Date'});
      else {
        const dataValue = new Date(data);
        res.send({ unix: parseInt(dataValue.getTime()), utc: dataValue.toGMTString() });
      }
    }
});

app.get("/api", (req, res) => {
  const now = new Date();
  res.json({ unix: parseInt(now.getTime()), utc: now.toGMTString() });
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
