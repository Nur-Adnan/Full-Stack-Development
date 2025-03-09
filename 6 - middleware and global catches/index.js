const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "adnan" || password != "pass") {
    res.status(400).json({
      msg: "Somethings up with your input",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Somethings up with your input",
    });
    return;
  }
  res.json({
    msg: "You are now authenticate",
  });
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
