const logger = (req, res, next) => {
  console.log("Logger middleware executed");
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

module.exports = logger;
