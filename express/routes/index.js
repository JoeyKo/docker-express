const express = require('express');
const { isLoggedIn } = require('../helpers/auth');
const router = express.Router();

router.get('/', isLoggedIn, function (req, res) {
  console.log(req)
  res.json({ 
    message: 'Hello, welcome to express + mongodb.' 
  });
});

module.exports = router;