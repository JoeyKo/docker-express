const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// mongodb config
const config = require('./config');

// mongodb connection
mongoose.connect(config.DB);

// routes
const routes = require('./routes');
const bear = require('./routes/bear');
const user = require('./routes/user');

const server = require('http').Server(app);

// socket.io support
const io = require('socket.io')(server);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('mongodb is connected!');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', [routes, bear, user]);

io.on('connection', (socket) => {
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on("disconnect", () => {
    console.log("a user go out");
  });
});

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

server.listen(config.PORT, function () {
  console.log('Server is running on PORT: ', config.PORT);
});
