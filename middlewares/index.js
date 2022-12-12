const authJwt = require("./auth.jwt");
const verifySignUp = require("./verify_singup");

//export middleware functions
module.exports = {
  authJwt,
  verifySignUp,
};
