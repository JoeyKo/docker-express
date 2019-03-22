const express = require("express");
const router = express.Router();
const Bear = require("../models/bear");

router
  .route("/bear")
  .post(function(req, res) {
    let bear = new Bear(req.body);

    bear.save(function(err) {
      if (err) {
        res.json({
          code: 101,
          message: err.message
        });
        return;
      }

      bear.speak();
      res.json({
        code: 100,
        message: "Bear created",
        data: bear
      });
    });
  })

  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err) res.send(err);
      res.json(bears);
    });
  });

router
  .route("/bear/:bear_id")
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) {
        res.json({
          code: 101,
          message: err.message
        });
        return;
      }
      res.json({
        code: 100,
        message: "",
        data: bear
      });
    });
  })

  .put(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) {
        res.json({
          code: 101,
          message: err.message
        });
        return
      }
      bear = Object.assign(bear, req.body);
      bear.save(function(err) {
        if (err) {
          res.json({
            code: 101,
            message: err.message
          });
          return
        }
        res.json({ 
          code: 100,
          data: bear,
          message: "Bear updated!" 
        });
      });
    });
  })

  .delete(function(req, res) {
    Bear.remove(
      {
        _id: req.params.bear_id
      },
      function(err, bear) {
        if (err) {
          res.json({
            code: 101,
            message: err.message
          });
          return
        }
        res.json({ 
          code: 100,
          data: {},
          message: "Successfully deleted" 
        });
      }
    );
  });

module.exports = router;
