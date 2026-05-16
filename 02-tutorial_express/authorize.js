const authorize = (req, res, next) => {
  console.log("Authorizing user...");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  }
  res.status(401).send("Unauthorized");
};

module.exports = authorize;
