const genImage = require("./genImage");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(genImage());
});

app.listen(PORT, function () {
  console.log("server started at " + PORT);
});
