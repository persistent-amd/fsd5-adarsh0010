const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath;
  let contentType;

  if (req.url === "/" || req.url === "/index.html") {
    filePath = path.join(__dirname, "index.html");
    contentType = "text/html";
  } else if (req.url === "/style.css") {
    filePath = path.join(__dirname, "style.css");
    contentType = "text/css";
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
