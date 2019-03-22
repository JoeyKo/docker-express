const jwt = require('jsonwebtoken');
const config = require('../config');

exports.isLoggedIn = function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers.authorization;
  // decode token
  if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.JWTSECRET, function(err, decoded) {
          if (err) {
              return res.status(401).send({
                  code: 101,
                  message: 'Your token is expired.'
              });
          } else {
              // if everything is good, save to request for use in other routes
              next();
          }
      });
  } else {
      // if there is no token
      // return an error
      return res.status(401).send({
          code: 101,
          message: 'You are not signed in.'
      });
  }
}