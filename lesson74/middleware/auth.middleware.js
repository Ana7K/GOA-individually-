export const authMiddleware = (req, res, next) => {
  try {
    const user = {
      name: "ana",
      age: 21,
      email: "anakitesashvili@gmail.com",
      password: "lomi.123",
    };

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "wrong token" });
  }
  console.log("auth is working");
};
