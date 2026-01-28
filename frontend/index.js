const http = require('http');

http.createServer((req, res) => {
  res.end("Frontend running 🚀");
}).listen(3000);
