const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;
const schema = zod.array(zod.number());
const userZodSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("BD").or(zod.literal("USA")),
  kidneys: zod.array(zod.number()),
});

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

// using zod kidney length

app.post("/health-checkup/kidney-zod", (req, res) => {
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);
  if (!response.success) {
    res.status(411).send({
      msg: "Invalid Input",
    });
  } else {
    res.send({
      response,
    });
  }
});

// global catches
app.use((err, req, res, next) => {
  // res.json({
  //   msg: "Sorry something is up with our server",
  // });
  res.status(500).send("Internal Error Occure");
});

// zod in function

function validInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}
validInput({
  email: "nuradnan@gmail.com",
  password: "12345",
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
