// app.methods
const express = require("express");
const app = express();

app.all("/", (req, res) => {
  // app.all access by all type of methods
  res.send("Welcome to application home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
