var express = require("express");
var app = express();
var converter = require("./converter");
var morgan = require("morgan");
app.use(morgan("dev"));

app.get("/rgbToHex", function (req, res) {
  var red = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue = parseInt(req.query.blue, 10);
  var hex = converter.rgbToHex(red, green, blue);
  res.send(hex);
});

app.get("/hexToRgb", function (req, res) {
  var hex = req.query.hex;
  var rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

app.get("/", function (req, res) {
  res.send({
    status: "up",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
