const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json({}));

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/route-handler", (req, res) => {
  res.json({
    name: "Nur Adnan",
    age: 25,
  });
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
