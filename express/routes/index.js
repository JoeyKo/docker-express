const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const loginUser = req.session.loginUser;
  const isLogined = !!loginUser;

  res.json({ isLogined: isLogined, 
    name: loginUser || '', 
    message: '老铁，欢迎你。' 
  });
});

module.exports = router;