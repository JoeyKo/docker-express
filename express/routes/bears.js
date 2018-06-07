const express = require('express');
const router = express.Router();
const Bear = require('../models/bear');

router.route('/bear')
  .post(function (req, res) {
    let bear = new Bear();
    bear.name = req.body.name;
    bear.age = req.body.age;
    bear.living = req.body.living;

    bear.save(function (err) {
      if (err) {
        res.status(400);
        res.send(err);
        return;
      };
      
      bear.speak();
      res.json({ message: 'Bear created' });
    });
  })

  .get(function (req, res) {
    Bear.find(function (err, bears) {
      if (err) res.send(err);
      res.json(bears);
    });
  });

  router.route('/bear/:bear_id')
  .get(function (req, res) {
    Bear.findById(req.params.bear_id, function (err, bear) {
      if(err) res.send(err);
      res.json(bear);
    });
  })

  .put(function (req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) res.send(err);
      bear.name = req.body.name;

      bear.save(function(err) {
        if (err) res.send(err);
        res.json({ message: 'Bear updated!' });
      });
    });
  })

  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err) res.send(err);
      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;