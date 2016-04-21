
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

var moment = require('moment');
// var _ = require('lodash');

//Schema
var questionSchema = new mongoose.Schema({
  question: { type: String, trim: true,unique: true,tolowercase : true},
  options:[{ type: String, trim: true}],
  answer:{ type: String, trim: true,unique: true},
  subject:{type: String, trim: true},
  topic:{type: String, trim: true}
});


questionSchema.statics.allQuestions = function(request,callback){
  Question.find({},function(err,ques){
  //  console.log("inside findOne");
      if(err){
        callback(err,null)
      }
      else{
      //  console.log(user);
        if(ques == null){
          callback(new Error("There are no questions"),null);
        }
        else{
          callback(null,ques);
        }
      }
     });
};

var Question = mongoose.model('Question', questionSchema)
module.exports = Question
