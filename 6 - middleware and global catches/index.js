const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//using middleware
function authMiddleware(req, res, next) {
  if (username != "adnan" && password != "pass") {
    res.status(403).send({
      msg: "Enter a valid user credentials",
    });
  } else {
    next();
  }
}

function validKidneyId(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).send({
      msg: "Invalid Kidney ID",
    });
  } else {
    next();
  }
}

// using middleware api

app.get(
  "/health-checkup-middleware",
  authMiddleware,
  validKidneyId,
  (req, res) => {
    res.send({
      msg: "You heart is healthy",
    });
  }
);

// without middleware
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

app.post("/router-handler/kidney-length", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
});

// global catches
app.use((err, req, res, next) => {
  // res.json({
  //   msg: "Sorry something is up with our server",
  // });
  res.status(500).send("Internal Error Occure");
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
