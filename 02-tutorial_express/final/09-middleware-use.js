const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// app.use([authorize, logger]); // middleware applies to all routes
// app.use("/api", logger); // middleware applies to all routes that start with /api

// app.use([authorize, logger]); // authorize first, then logger
app.use([logger, authorize]); // logger first, then authorize

// 1. use vs route
// 2. options - our won / express / 3rd party

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  console.log(req.user);
  res.send("Products");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
