const express = require('express');
const { isLoggedIn } = require('../helpers/auth');
const router = express.Router();

router.get('/', isLoggedIn, function (req, res) {
  console.log(req, res)
  res.json({
    code: 100,
    message: 'Hello, You are logged in.' 
  });
});

module.exports = router;