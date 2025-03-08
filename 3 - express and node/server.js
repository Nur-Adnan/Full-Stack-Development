const fs = require("fs");
const express = require("express");
const app = express();

app.get("/");
fs.readFile("a.txt", function (err, data) {
  console.log(data);
});

app.get("/files/:fileName", (req, res) => {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf-8", (err, data) => {
    res.json({
      data,
    });
  });
  res.json({});
});

app.listen(3005);
