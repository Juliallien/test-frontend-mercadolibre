require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const appRoutes = require("./routes/index.js");

app.use(function (req, res, next) {
  const allowedDomains = ["http://localhost:3001", "http://0.0.0.0:3001"];
  const { origin } = req.headers;
  if (allowedDomains.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", appRoutes);

module.exports = app;
