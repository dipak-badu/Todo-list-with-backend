const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ExpressError = require('./ExpressError');

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ExpressError("Unauthorized: No token provided", 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) throw new ExpressError("Unauthorized: User not found", 401);

    req.user = user;
    next();
  } catch (error) {
    throw new ExpressError("Unauthorized: Invalid token", 401);
  }
};

module.exports = requireAuth;
