const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;

app.get("/HomePage", (req, res) => {
  fs.readFile(path.resolve(__dirname, "./home.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("<h1>Internal server error</h1>");
    }
    res.send(data);
  });
});
app.get("/About", (req, res) => {
  fs.readFile(path.resolve(__dirname, "./about.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("<h1>Internal server error</h1>");
    }
    res.send(data);
  });
});
app.listen(port, () => {
  console.log("server running on port 8080");
});
