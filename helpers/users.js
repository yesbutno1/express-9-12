const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheCanGenerateTokens";

const calculateToken = (userEmail = "") => {
  return crypto
    .createHash("md5")
    .update(userEmail + PRIVATE_KEY)
    .digest("hex");
};

const calculateJWTToken = (user) => {
  return jwt.sign({ email: user.email, id: user.id }, PRIVATE_KEY);
};

const decodeUserFromJWT = (token) => {
  return jwt.decode(token);
};

module.exports = { calculateToken, calculateJWTToken, decodeUserFromJWT };
