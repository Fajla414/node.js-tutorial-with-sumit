// app.disable(name) and app.enable(name)
const express = require("express");
const app = express();

app.enable("case sensitive routing"); // enable case sensitive routing
app.disable("case sensitive routing"); // disable case sensitive routing

app.all("/about", (req, res) => {
  res.send("Welcome to application home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
