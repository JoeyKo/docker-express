const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const config = require('../config');

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
        res.json({ message: 'login successfully! ', token: jwt.sign({ 
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),}, config.JWTSECRET,) 
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