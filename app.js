const express = require("express");
const verfiyToken = require("./middlewares");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const userData = [
  {
    id: 1,
    name: "mukesh",
    email: "mpprajapat459@gmail.com",
    password: "aty@9898",
  },
  {
    id: 2,
    name: "rajesh",
    email: "npprajapat459@gmail.com",
    password: "aty@9090",
  },
  {
    id: 3,
    name: "harish",
    email: "oklove459@gmail.com",
    password: "aty@1004",
  },
];

const secretKey = "mukesh";

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  const data = userData.find(
    (x) => x.email === email && x.password === password
  );

  try {
    if (!data) {
      throw new Error("user is not found");
    }
    const payload = { userId: data.id, role: "user" };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    res.json({ token: token }).status(200);
  } catch (err) {
    next(err);
  }
});

app.get("/data", verfiyToken, async (req, res) => {
  console.log("hello");
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    res.json(data).status(200);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(404).json({ Error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
