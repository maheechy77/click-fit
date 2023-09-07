var express = require('express')
var multer  = require('multer')
var app = express()
var port = 3000;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload_images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/'));
app.use('/upload_images', express.static('upload_images'));

app.post('/profile-upload-single', git init.single('image'), function (req, res, next) {
  console.log(JSON.stringify(req.file))
  var response = '<a href="/">Home</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})


app.listen(port,() => console.log(`Server running on port ${port}!`))
