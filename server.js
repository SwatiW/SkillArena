require('./config/db');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require("path");

var users=require('./routes/users')

var port=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

app.use('/users',users)
// app.post('/login',function(req,res){
// 	console.log("request for login");
// });


app.listen(port);
 console.log('Listening on port:'+port);
