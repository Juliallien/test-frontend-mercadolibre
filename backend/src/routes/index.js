const express = require("express");
const router = express.Router();
const glob = require("glob");
const path = require("path");

function getRouteName(dir) {
  const filename = path.basename(dir);
  const routename = filename.split(".")[0];
  return routename;
}

glob(`${__dirname}/*.jsx`, (err, files) => {
  if (err) {
    throw new Error("Error registering routes");
  }

  files.forEach((dir) => {
    const routename = getRouteName(dir);
    if (routename === "index") {
      return;
    }
    const file = require(dir);
    router.use(`/${routename}`, file);
  });
});

module.exports = router;
