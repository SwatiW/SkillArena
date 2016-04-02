
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

var moment = require('moment');
// var _ = require('lodash');

//Schema
var questionSchema = new mongoose.Schema({
  question: { type: String, trim: true,unique: true,tolowercase : true},
  options:[
    option1:{ type: String, trim: true},
    option2:{ type: String, trim: true},
    option3:{ type: String, trim: true},
    option4:{ type: String, trim: true},
  ]
  answer:{ type: String, trim: true,unique: true},

});
