var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const cpUpload = upload.fields([{ name: 'upfile', maxCount: 1 }])

app.post('/api/fileanalyse', cpUpload, (req, res) => {
  res.json({
    name: req.files.upfile[0].originalname,
    type: req.files.upfile[0].mimetype,
    size: req.files.upfile[0].size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
