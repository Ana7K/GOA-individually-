import http from "http";
import express from "express";
// http.get("http://localhost:8000/", (req) => {
//   console.log("get on /");
// });

// const server = http.createServer((req) => {
//   console.log("server is listening");
// });
// server.listen(8000);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        data: "hello!",
      })
    );
  } else if (req.url == "/name") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        data: "i'm ana",
      })
    );
  } else if (req.url == "/age") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        data: "i'm 21",
      })
    );
  }
  else if (req.url == "/bye") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        data: "goodbye!",
      })
    );
  }
});
server.listen(8000);

const app = express();
const PORT = 5000;

app.get("/name", (req, res) => {
  res.json({ name: "ana" });
});
app.get("/surname", (req, res) => {
  res.json({ surname: "Kitesashvili" });
});
app.get("/age", (req, res) => {
  res.json({ age: "21" });
});
app.get("/pet", (req, res) => {
  res.json({ pet: "don't have one" });
});
app.get("/car", (req, res) => {
  res.json({ car: "don't have one" });
});
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
