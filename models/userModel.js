

var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
//var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
// var hat = require('hat');
var moment = require('moment');
// var _ = require('lodash');

// var SALT_WORK_FACTOR = 10;

//Schema
var userSchema = new mongoose.Schema({
  username: { type: String, trim: true,unique: true,tolowercase : true},
  password:{ type: String, trim: true},
  email:{ type: String, trim: true,unique: true},
  firstname:{ type: String, trim: true},
  lastname:{ type: String, trim: true},
  gender:{ type: String},
  dob: { type: Number },
  profilephoto:{ type: String},
  profilephotoicon:{ type: String},
  //resettoken: {type : String},
  createdat: { type : Number},
  updatedat: { type : Number},

  scores:{type : Number, default : 0},
  questions_solved : {type : Number, default : 0}
});


//---------------------------------------------------------------------------------------
// create user -
// create a new user object and store all the user details in the database.
//---------------------------------------------------------------------------------------
userSchema.statics.createUser = function(request, callback){
  User.findOne({$or : [{email: request.signUpEmail},{username: request.username}]},function(err,user){
    if(err)
      callback(err,null);
    else if(!user){
        //sending registration confirmation mail using nodemon
        var smtpTransport = nodemailer.createTransport('SMTP', {
          service: 'Gmail',
          auth: {
            user:'teamskillarena@gmail.com',
            pass:'SwatiManisha'
          }
        });
        var mailOptions = {
          to: request.signUpEmail,
          from: 'Team SkillArena <team@skillarena.com>',
          subject: 'SkillArena account registration confirmation',
          text:  'Hi '+ request.firstname +',\n\nWe are pleased you have decided to join SkillArena. Please visit this link to complete the process of registration: \n\n' +
         'http://www.skillarena.com/confirmation/' + '\n\n' +
         'If you did not request this, please ignore this email.\n\nHope to see you soon! \n\nLove,\nTeam SkillArena \n\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          if(err){
            callback(new Error("Error in sending mail"),null)
          }

          var newUser = new User();
          newUser.firstname = request.firstname;
          newUser.lastname = request.lastname;
          newUser.username=request.username
          newUser.email = request.signUpEmail;
          newUser.password = request.signUpPassword;
          newUser.dob = request.dob;
          newUser.gender = request.gender;
          newUser.profilephoto = "_profile_pic_path";
          newUser.profilephotoicon = "_profile_pic_icon_path";
          newUser.createdat = moment().unix();
          newUser.updatedat = moment().unix();
          newUser.save(function(err,user){
            if (err)
              callback(err, null)
            callback(null,user)
        });

      });
    }
    else
      callback(new Error("This username or email is already registered with us"),null);
  })

};

//---------------------------------------------------------------------------------------
//  user login- check whether user exists or not , if user exists compare user password with the
// request password. if they match send user object or else send error
//---------------------------------------------------------------------------------------
userSchema.statics.userLogin = function(request,callback){
  User.findOne({email: request.email},function(err,user){
   console.log(user);
      if(err){
        callback(err,null)
      }
      else{
      //  console.log(user);
        if(user == null){
          callback(new Error("User Does not exists"),null);
        }
        else{
          if(user.password == request.password)
            callback(null,user);
          else
            callback(new Error("Password Incorrect"),null);
        }
      }
     });
};

userSchema.statics.resetPassword = function(request,callback){
  User.findOne({email: request.email},function(err,user){
      if(err){
        callback(err,null)
      }
      else{
        if(user == null){
          callback(new Error("Token is incorrect."),null);
        }
        else{
          user.password = request.password
          user.save(function(err,user){
            if (err)
              callback(err, null)
            callback(null,user)
          });
        }
      }
     });
}

userSchema.statics.updateMarks = function(request,callback){

  User.findOne({username: request.username},function(err,user){
      if(err){
        callback(err,null)
      }
      else{
        if(user == null){
          callback(new Error("No user found"),null);
        }
        else{
          if(request.answer== 'true'){
            
            user.scores = user.scores + 10
          }
          user.questions_solved=user.questions_solved+1
          user.save(function(err,user){
            if (err)
              callback(err, null)
            callback(null,user)
          });
        }
      }
     });
}

var User = mongoose.model('User', userSchema)
module.exports = User
