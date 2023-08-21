const jwt  = require("jsonwebtoken")

const verfiyToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  try {
    if (!token) {
      throw new Error("'Unauthorized'");
    }
    jwt.verify(token, "mukesh", (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = decoded; // Store the decoded payload in the request object
      next(); // Continue to the next middleware or route handler
    });
  } catch (err) {
    next(err);
  }
};

module.exports = 
verfiyToken;
