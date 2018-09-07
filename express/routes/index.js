const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const loginUser = req.session.loginUser;
  const isLogined = !!loginUser;

  res.json({ isLogined: isLogined, 
    name: loginUser || '', 
    message: 'Hello, welcome to express + mongodb.' 
  });
});

module.exports = router;