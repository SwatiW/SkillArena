

var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// var bcrypt = require('bcrypt');
// var hat = require('hat');
// var moment = require('moment');
// var _ = require('lodash');

// var SALT_WORK_FACTOR = 10;

//Schema
var userSchema = new mongoose.Schema({
  username: { type: String, trim: true, unique: true,tolowercase : true},
  password:{ type: String, trim: true},
  firstname:{ type: String, trim: true},
  lastname:{ type: String, trim: true},
  gender:{ type: String},
  dob: { type: Number },
  profilephoto:{ type: String},
  profilephotoicon:{ type: String},
  resettoken: {type : String},
  createdat: { type : Number},
  updatedat: { type : Number},
});


//---------------------------------------------------------------------------------------
// create user -
// create a new user object and store all the user details in the database.
//---------------------------------------------------------------------------------------
userSchema.statics.createUser = function createUser(userDetails, callback){

       var newUser = new User();
       newUser.username = userDetails.username;
       newUser.password = userDetails.password;
       newUser.firstname = userDetails.firstname;
       newUser.lastname = userDetails.lastname;
       newUser.profilephoto = "_profile_pic_path";
       newUser.profilephotoicon = "_profile_pic_icon_path";
       newUser.createdat = moment().unix();
       newUser.updatedat = moment().unix();
       newUser.save(function(err,user){
         if (err)
           callback(err, null)
         callback(null,user)
       });
};

//---------------------------------------------------------------------------------------
//  user login- check whether user exists or not , if user exists compare user password with the
// request password. if they match send user object or else send error
//---------------------------------------------------------------------------------------
userSchema.statics.userLogin = function(request,callback){
  User.findOne({username: request.username},function(err,user){
      if(err){
        callback(err,null)
      }
      else{
        if(!user){
          callback(new Error("User Does not exists"),null);
        }
        else{
          if(user.password === request.password)
            callback(null,user);
          else
            callback(new Error("Password Incorrect"),null);
        }
      }
     });
};

var User = mongoose.model('User', userSchema)
module.exports = User
