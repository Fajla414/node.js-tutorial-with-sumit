// req.baseUrl
const express = require("express");
const app = express();
const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl); // console => /admin
  res.send("we are in admin dashboard");
});

app.use("/admin", adminRoute);
app.get("/user/:id", (req, res) => {
  // console.log(req.baseUrl); // console is empty
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
