const jwt = require("jsonwebtoken");
const User = require("../models/user");
const util = require('../utils/util');
const { respUnAuthorized } = util;

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
      ? req.header("Authorization").replace("Bearer ", "")
      : "";
    if (!token) {
      throw Error("Authorization token missing.");
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findOne({_id : decoded.userId});
    if (!user) {
      throw Error("User Verification failed");
    }
    req.currUser = user;
    next();
  } catch (e) {
    return respUnAuthorized(res,e.message);
  }
};
module.exports = auth;