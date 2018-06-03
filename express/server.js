const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bear = require('./models/bear');

const config = require('./db');
const PORT = 4000;
const router = express.Router();

mongoose.connect(config.DB, function(err, db) {
  if (err) {
    console.log('database is not connected');
  } else {
    console.log('database is connected');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function (req, res) {
  res.json({ message: '老铁，欢迎你。' });
});

router.route('/bear')
  .post(function (req, res) {
    let bear = new Bear();
    bear.name = req.body.name;

    bear.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bear created' });
    });
  })

  .get(function (req, res) {
    Bear.find(function (err, bears) {
      if (err) {
        res.send(err);
      }
      res.json(bears);
    });
  });

router.route('/bear/:bear_id')
  .get(function (req, res) {
    Bear.findById(req.params.bear_id, function (err, bear) {
      if(err) {
        res.send(err);
      }
      res.json(bear);
    });
  })

  .put(function (req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err) {
        res.send(err);
      }
      bear.name = req.body.name;

      bear.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Bear updated!' });
      });
    });
  })

  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted' });
    });
  });

app.use('/api', router);

app.listen(PORT, function () {
  console.log('Server is running on PORT: ', PORT);
});

