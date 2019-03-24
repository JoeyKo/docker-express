const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const redis = require("redis");
const routes = require("./express/routes");

const app = express();

// mongodb config
const config = require("./express/config");

// mongodb connection
mongoose.set('useCreateIndex', true)
mongoose.connect(config.MONGODB, { useNewUrlParser: true });

mongodb = mongoose.connection;

mongodb.on("error", function(err) {
  console.log("mongodb connection error: ", err);
});
mongodb.once("open", function() {
  console.log("mongodb is connected!");
});

client = redis.createClient({
  host: "redis"
});
client.on("error", function(err) {
  console.log("redis connection error: ", err);
});
client.on("connect", function() {
  console.log("redis is connected!");
});

app.use(logger("dev"));
app.use(express.json());

// routes
app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

app.listen(config.PORT, function() {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
});
