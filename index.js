// app.param
const express = require("express");
const app = express();

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "Bangladesh",
  };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails); // output the user details
  res.send("welcome to application home");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
