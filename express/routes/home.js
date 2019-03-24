const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../helpers/auth');

router.get('/', isLoggedIn, function (req, res) {
  console.log(req, res)
  res.json({
    code: 100,
    message: 'Hello, You are logged in.' 
  });
});

module.exports = router;