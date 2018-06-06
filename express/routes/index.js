const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.json({ message: '老铁，欢迎你。' });
});

module.exports = router;