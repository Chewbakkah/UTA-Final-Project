const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
const jwt = require("jsonwebtoken");

const secret = "cheese";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
<<<<<<< HEAD
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
=======
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch {
      console.log("Invalid Token");
>>>>>>> dev
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
=======

  signToken: function ({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret);
>>>>>>> dev
  },
};