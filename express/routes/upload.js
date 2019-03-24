const express = require('express');
const router = express.Router();
const Image = require("../models/Image");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/', limits: 9, preservePath: false })

router.route("/upload/image").post(upload.single('file'), async (req, res) => {
  try {
    console.log(req.file)
    const file = new Image({
      ...req.file,
      src: req.file.path,
      filename: req.file.originalname,
    })
    // const result = await file.save()

    console.log(file)
    res.json({
      code: 100,
      file: file,
      message: 'file uploaed'
    })
  } catch (err) {
    res.json({ code: 101, message: err.message });
    return;
  }
});

module.exports = router;
