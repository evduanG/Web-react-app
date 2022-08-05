// server/index.js
const path = require("path");
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

/*===================================================================
======get all data====get all data====get all data==get all data=====
====================================================================*/
app.get("/", (req, res) => {
  res.send("Hello from the server");
});
app.get("/api", (req, res) => {
  fs.readFile("./server/Data.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
