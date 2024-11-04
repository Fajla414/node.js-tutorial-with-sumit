// app.render()
const express = require("express");
const app = express();
app.set("view engine", "ejs"); // first install the ejs engine

app.get("/about", (req, res) => {
  res.render("pages/about"); // browser output => what's on the  /views/pages/about page
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
