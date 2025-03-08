const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const users = [
  {
    name: "Adnan",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(bodyParser.json());
// also you can use app.use(express.json());

app.get("/route-handler/adnan", (req, res) => {
  const adnanKidneys = users[0].kidneys;
  const numberOfKidneys = adnanKidneys.length;
  let numberofHealthyKidneys = 0;
  for (let i = 0; i < adnanKidneys.length; i++) {
    if (adnanKidneys[i].healthy) {
      numberofHealthyKidneys = numberofHealthyKidneys + i;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/route-handler/adnan-insertion", (req, res) => {
  // in post request you send a data into the body
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done !",
  });
});

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

// function to express
function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/route-handler/calculateSum", (req, res) => {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans.toString());
});

function calculateAddition(a, b) {
  return a + b;
}

app.get("/route-handler/calculateAddition", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const ans = calculateAddition(a, b);
  res.send(ans);
});

app.listen(port, () => {
  console.log(`App Listen on Port ${port}`);
});
