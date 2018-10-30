const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const config = require("../config");

router.use(function(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, config.JWTSECRET, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: "invalid token." });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "no token provided."
    });
  }
});

module.exports = router;
