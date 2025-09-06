const protect = (req, res, next) => {
  try {
    const userId = req.body.userId || req.query.userId;
    
    if (!userId) {
      return res.status(401).json({ message: "Not authorized, User ID not provided." });
    }

    // Set req.user to an object with the ID
    req.user = { id: userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = { protect };