const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "nur@dnan";
const app = express();
app.use(express.json());

const All_User = [
  {
    username: "nuradnan@gmail.com",
    password: "Adnan12345",
    name: "Nur Adnan Chowdhury Anik",
  },
  {
    username: "tanjid@gmail.com",
    password: "Tanjid12345",
    name: "Mobinul Ahsan Tanjid",
  },
  {
    username: "shahed@gmail.com",
    password: "Shahed12345",
    name: "Shahedul Islam Shahed",
  },
];

// Function to check if a user exists in the All_User array
function userExists(username, password) {
  return All_User.some(
    (user) => user.username === username && user.password === password
  );
}

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory database",
    });
  }
  // when successfully logged in
  // based on the user name, the token is generated, and to verify the token, we use jwt password
  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ msg: "Token is required" });
  }

  try {
    // token verification -> take the token then verify it using the jwtpassword
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Filter out the logged-in user and return other users
    const filteredUsers = All_User.filter(
      (user) => user.username !== username
    ).map((user) => ({
      username: user.username,
      name: user.name,
    }));

    return res.json({ users: filteredUsers });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid Token" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
