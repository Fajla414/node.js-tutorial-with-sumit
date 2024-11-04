// app.route()
const express = require("express");
const app = express();

// app.get("/about/mission", (req, res) => {
//   res.send("Welcome to application home");
// });
// app.post("/about/mission", (req, res) => {
//   res.send("Welcome to application home post");
// });
// app.put("/about/mission", (req, res) => {
//   res.send("Welcome to application home put");
// });

// Allternate.get("/about/mission");

app
  .route("/about/mission")
  .get((req, res) => {
    res.send("Welcome to application home");
  })
  .post((req, res) => {
    res.send("Welcome to application home post");
  })
  .put((req, res) => {
    res.send("Welcome to application home put");
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
