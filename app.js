var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname.substr(file.originalname.lastIndexOf(".")))
  }
})

var upload = multer({ storage: storage })


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/upload",upload.any(),function(req,res){
	res.send(req.files);
});

app.listen("8000",function(){console.log("listening to port 8000...");});