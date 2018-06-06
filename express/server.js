const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// mongodb
const config = require('./db');

// routes
const routes = require('./routes');
const bears = require('./routes/bears');

// port config
const PORT = 4000;

const app = express();

mongoose.connect(config.DB, function(err, db) {
  if (err) {
    console.log('database is not connected');
  } else {
    console.log('database is connected');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes, bears);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

app.listen(PORT, function () {
  console.log('Server is running on PORT: ', PORT);
});

