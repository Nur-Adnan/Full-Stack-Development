const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/route-handler", (req, res) => {
  res.json({
    name: "Nur Adnan",
    age: 25,
  });
});

app.post("/route-handler/conversation", (req, res) => {
  const message = req.body.message;
  console.log(message);

  res.json({
    output: "2 + 2 = 4",
  });
});

app.post("/route-handler/query", (req, res) => {
  const message = req.query.message;
  console.log(message);
  res.json({
    name: "Adnan",
  });
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
