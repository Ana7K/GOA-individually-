import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token)
    // ############### add status as a result data json ###############
    return res.status(401).json({ status: 401, message: "no token found" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(500).json({ message: "invalid token" });
  }
}
