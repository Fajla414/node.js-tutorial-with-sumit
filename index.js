// app.mount
const express = require("express");
const app = express();
const admin = express();

admin.on("mount", (parent) => {
  console.log("Admin Mounted");
  console.log(parent); // refers to the parent app
});

app.get("/", (req, res) => {
  res.send("Welcome to application home");
});

app.use("/admin", admin);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
