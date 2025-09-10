import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY;

//! user
const users = [
  { id: 1, username: "ana", password: bcryptjs.hashSync("lomi.123", 8) },
];
// console.log(bcryptjs.hashSync("lomi.123", 12));

//! login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && bcryptjs.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    // Setting an httpOnly cookie on the server (Express.js example)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

//! middleware
const authenticateJWT = (req, res, next) => {
//   const token = req.headers.authorization;
//   console.log(token);
    const token = req.cookies.token;
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

//! protected route
app.get("/protected", authenticateJWT, (req, res) => {
  res.send(`Hello ${req.user.username}, you have accessed a protected route!`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(users);
