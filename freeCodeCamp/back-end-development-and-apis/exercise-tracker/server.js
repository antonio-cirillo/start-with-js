const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(process.env['MONGO_URI']);

const userSchema = new mongoose.Schema({
  username: String,
  count: Number,
  log: []
}, {
  versionKey: false
});

const exerciseSchema = new mongoose.Schema({
  _id: String,
  username: String,
  date: String,
  duration: Number,
  description: String
}, {
  versionKey: false
});

const User = mongoose.model('User', userSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users/:_id/exercises', (req, res) => {
  User.findById(req.params._id, (errFirst, dataFirst) => {
    Exercise.findById(req.params._id, (errSecond, dataSecond) => {
      if(dataSecond == null || !dataSecond) {
        new Exercise({
          _id: req.params._id,
          username: dataFirst.username,
          date: (req.body.date) ? (new Date(req.body.date)).toDateString() : new Date()
            .toDateString(),
          duration: parseInt(req.body.duration),
          description: req.body.description
        }).save((errThird, dataThird) => {
          dataFirst.count = dataFirst.count + 1;
          dataFirst.log.unshift({
            description: req.body.description,
            duration: parseInt(req.body.duration),
            date: (req.body.date) ? req.body.date :
              new Date().toDateString()
            });
          dataFirst.save((err, data) => res.json(dataThird));
        })
      } else {
        dataSecond.date = (req.body.date) ? req.body.date : 
          new Date().toDateString();
        dataSecond.duration = req.body.duration;
        dataSecond.description = req.body.description;
        dataSecond.save((errThird, dataThird) => {
          dataFirst.count = dataFirst.count + 1;
          dataFirst.log.unshift({
            description: req.body.description,
            duration: parseInt(req.body.duration),
            date: (req.body.date) ?  (new Date(req.body.date)).toDateString() : new Date().toDateString()
          });
          dataFirst.save((err, data) => res.json(dataThird))
        });
      } 
    })   
  })  
})

app.get('/api/users/:_id/logs', (req, res) => {
  User.findById(req.params._id, (err, data) => {
    if(req.query.limit != null)
      data.log = data.log.slice(0, parseInt(req.query.limit));
    if(req.query.from != null) {
      const from = new Date(req.query.from);
      data.log = data.log.filter((value) => new Date(value.date) >= from);
    }
    if(req.query.to != null) {
      const to = new Date(req.query.to);
      data.log.filter = data.log.filter((value) => new Date(value.date) <= to);
    }
    res.json(data);
  })
})

app.get('/api/users', (req, res) => {
  User.find({}, '_id username', (err, data) => {
      res.json(data);
  });
})

app.post('/api/users', (req, res) => {
  new User({
    username: req.body.username,
    count: 0,
    log: []
  }).save((err, data) => {
    res.json({_id: data._id, username: data.username});
  })
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
