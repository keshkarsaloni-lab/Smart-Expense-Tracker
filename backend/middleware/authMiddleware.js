const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {

    // Get token from header

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No Token Found",
      });
    }

    // Remove Bearer if present

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    // Verify token

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid Token",
    });

  }
};

module.exports = authMiddleware;