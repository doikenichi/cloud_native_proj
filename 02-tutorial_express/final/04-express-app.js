const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
// 1. create a new directory called public
// 2. copy all files from navbar-app to public except index.html
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("/{*path}", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
