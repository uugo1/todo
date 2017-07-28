
'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_user = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
    User.findOne({email: req.body.email}, function(err, user) {
    if (err)
        res.send(err);
            // if no user is found, return the message
            if (user){ 
             res.status(409).send('That email is already taken.');
            //  res.send(null, false, req.flash('signupMessage', 'That email is already taken.'));
            }
            else{
             // save the user
         var new_user = new User();
         new_user.email = req.body.email;
         new_user.password = new_user.generateHash(req.body.password);
         new_user.save(function(err, user) {
          if (err)
            res.send(err);
             res.json(user);
            });
         }
           
   
        });
};

exports.login_a_user = function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err)
    res.send(err);

            // if no user is found, return the message
            if (!user)
             res.status(404).send('No user found.');
            // if the user is found but the password is wrong
            if (!user.validPassword(req.body.password))
             {
              // res.json(user);
               res.status(403).json('Oops! Wrong password.');
             }
              else{ 
                // all is well, return successful user
              req.session.user = user;
              res.json(user);
             }
   });
};


