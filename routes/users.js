var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var User = require('../models/userModel');
//var _ = require('lodash');
var nodemailer = require('nodemailer');
var crypto = require('crypto')

//---------------------------------------------------------------------------
// Webservice : user create , HttpVerb : post , path :/users/create
//-------------------------------------- ------------------------------------
// This webservice will be called, when the user registers for the first time
//===========================================================================

 router.post('/login', function(req,res){

  var code = 200;
  var response = {}
  User.userLogin(req.body,function(err,user){
    if(err){
      code = 400
      response = {"error" : true,"message" : err.message}
    }
    else{
			response={"error" : false,"message" :"Login Successfull",'data': user }
   }
    res.status(code).json(response);
  })

});

router.post('/signUp' ,function(req, res) {
    var response = {}
    var code = 200;
    User.createUser(req.body, function(err, user){
       if(err){
         code = 400;
         response = {'error':true,'message':err.message};
       }
       else{
         response = {'error':false,'message':"User created successfull",'data': user};
       }
       res.status(code).json(response);
    });
});



module.exports = router;
