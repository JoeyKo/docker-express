const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.route('/user/login')
  .post(function(req, res) {

    User.where({ email: req.body.email })
      .findOne(function (err, user) {
        if (err) {
          res.status(500);
          res.send(err);
          return;
        }
        if (!user) {
          res.status(400);
          res.json({ message: 'email doesn\'t exist!' });
          return;
        }
        if (user.password !== req.body.password) {
          res.status(400);
          res.json({ message: 'password is wrong!' });
          return;
        }
        req.session.regenerate(function(err) {
          if (err) {
            return res.json({ message: 'login failed!' })
          }
          req.session.loginUser = user.email;
          res.json({ message: 'login successfully! '});
        });
      });
    });

router.route('/user/regist')
  .post(function(req, res) {

    User.where({ email: req.body.email })
      .findOne(function (err, user) {
        if (user) {
          res.status(400);
          res.json({ message: 'user already exists' });
          return;
        }
        user = new User();

        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function (err) {
          if(err) {
            res.status(500);
            res.send(err);
            return;
          }
        });
        res.json({ message: 'User created' });
      });
    });

module.exports = router;