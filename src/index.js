const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Welcome to my first API");
});

app.listen(port, () => {
  console.log('Server running on port '+port);
});
