const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
const config = require("../config");

router.route("/user/login").post(function(req, res) {
  User.where({ email: req.body.email }).findOne(function(err, user) {
    if (err) {
      res.json({ code: 101, message: err.message });
      return;
    }
    if (!user) {
      res.json({ code: 101, message: "email doesn't exist!" });
      return;
    }
    if (user.password !== req.body.password) {
      res.json({ code: 101, message: "password is wrong!" });
      return;
    }
    res.json({
      code: 100,
      message: "login successfully! ",
      token: jwt.sign(
        {
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60
        },
        config.JWTSECRET
      )
    });
    // client
  });
});

router.route("/user/regist").post(function(req, res) {
  User.where({ email: req.body.email }).findOne(function(err, user) {
    if (user) {
      res.json({ code: 101, message: "user already exists" });
      return;
    }
    user = new User(req.body);
    user.save(function(err) {
      if (err) {
        res.json({ code: 101, message: err.message });
        return;
      }
    });
    res.json({ code: 100, message: "Regist successfully" });
  });
});

module.exports = router;
