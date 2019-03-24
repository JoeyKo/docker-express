const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const redis = require("redis");
const User = require("../models/user");
const config = require("../config");
const { promisify } = require("util");

const router = express.Router();

router.route("/user/login").post(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.json({ code: 101, message: "email doesn't exist!" });
      return;
    }
    const isEqual = await bcrypt.compare(req.body.password, user.password);
    if (!isEqual) {
      res.json({ code: 101, message: "password is wrong!" });
      return;
    }
    const getAsync = promisify(client.get).bind(client);

    getAsync(user.id).then(function(res) {
      console.log(res); // => 'bar'
    });
    const token = jwt.sign(
      {
        id: user.id,
        expiresIn: 24 * 60 * 60
      },
      config.JWTSECRET
    );
    client.set(user.id, token, "EX", 24 * 60 * 60, redis.print);
    res.json({
      code: 100,
      message: "login successfully! ",
      token
    });
  } catch (err) {
    res.json({ code: 101, message: err.message });
    return;
  }
});

router.route("/user/regist").post(async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.json({ code: 101, message: "user already exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = new User({
      ...req.body,
      password: hashedPassword
    });

    const result = await user.save();
    res.json({
      code: 100,
      data: result,
      token: jwt.sign(
        {
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60
        },
        config.JWTSECRET
      ),
      message: "Regist successfully"
    });
  } catch (err) {
    res.json({ code: 101, message: err.message });
    return;
  }
});

module.exports = router;
