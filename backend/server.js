const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

app.listen(5000,'0.0.0.0', () => {
  console.log("Backend listening on port 5000");
});