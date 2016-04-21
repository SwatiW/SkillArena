var express = require('express');
var router = express.Router();
var Question = require('../models/quesModel');
//var _ = require('lodash');


//TODO -- check status codes for every reaponse
//As AngularJs dosnt accept responses with error codes, they have been tampered with
//EG: instead of code=400 , code=200 has been done for the time being


//---------------------------------------------------------------------------
// Webservice : user create , HttpVerb : post , path :/users/create
//-------------------------------------- ------------------------------------
// This webservice will be called, when the user registers for the first time
//===========================================================================

 router.get('/all', function(req,res){
  var code = 200;
  var response = {}
  Question.allQuestions(null,function(err,ques){
    if(err){
      code = 200
      response = {"error" : true,"message" : err.message}
    }
    else{
			response={"error" : false,"message" :"Question Fetch Successfull",'data': ques }
   }
    res.status(code).json(response);
  })

});


module.exports = router;
