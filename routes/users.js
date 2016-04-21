var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var User = require('../models/userModel');
//var _ = require('lodash');

var crypto = require('crypto')

//TODO -- check status codes for every reaponse
//As AngularJs dosnt accept responses with error codes, they have been tampered with
//EG: instead of code=400 , code=200 has been done for the time being


//---------------------------------------------------------------------------
// Webservice : user create , HttpVerb : post , path :/users/create
//-------------------------------------- ------------------------------------
// This webservice will be called, when the user registers for the first time
//===========================================================================

 router.post('/login', function(req,res){
   console.log(req.body);
  var code = 200;
  var response = {}
  User.userLogin(req.body,function(err,user){
    if(err){
      code = 200
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
         code = 200;
         response = {'error':true,'message':err.message};
       }
       else{
         response = {'error':false,'message':"User created successfully",'data': user};
       }
       res.status(code).json(response);
    });
});

router.post('/forgetPassword' ,function(req, res) {
    var response = {}
    var code = 200;
    var request=req.body

    var smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
        user:'team@skillarena.com',
        pass:'SwatiManisha'
      }
    });
    var mailOptions = {
      to: request.email,
      from: 'Team SkillArena <team@skillarena.com>',
      subject: 'SkillArena account registration confirmation',
      text:  'Hi '+ request.firstname +',\n\nWe are pleased you have decided to join SkillArena. Please visit this link to complete the process of registration: \n\n' +
     'http://www.skillarena.com/confirmation/' + '\n\n' +
     'If you did not request this, please ignore this email.\n\nHope to see you soon! \n\nLove,\nTeam SkillArena \n\n'
    };
    smtpTransport.sendMail(mailOptions, function(err) {
      if(err){
        code=200
        response = {'error':true,'message':err.message};
      }
      else{
        response = {'error':false,'message':"Mail sent successfully"};
      }
      res.status(code).json(response);
    })

});

router.post('/resetPassword' ,function(req, res) {
    var response = {}
    var code = 200;
    User.resetPassword(req.body, function(err, user){
       if(err){
         code = 200;
         response = {'error':true,'message':err.message};
       }
       else{
         response = {'error':false,'message':"Password reset successfully"};
       }
       res.status(code).json(response);
    });
});

router.post('/updateMarks' ,function(req, res) {
    var response = {}
    var code = 200;
    User.updateMarks(req.body, function(err, user){
       if(err){
         code = 200;
         response = {'error':true,'message':err.message};
       }
       else{
         response = {'error':false,'message':"scores updated","data":user};
       }
       res.status(code).json(response);
    });
});

router.get('/currentScores/:username' ,function(req, res) {
    var response = {}
    var code = 200;
    console.log("inside");
    User.getMarks(req.params, function(err, user){
       if(err){
         code = 200;
         response = {'error':true,'message':err.message};
       }
       else{
         response = {'error':false,'message':"current scores","data":user};
         console.log(response);
       }
       res.status(code).json(response);
    });
});


module.exports = router;
