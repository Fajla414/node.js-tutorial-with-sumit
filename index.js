const express = require("express");

const app = express();
// app.use(express.raw());      // variation of data
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static(__dirname + "/public/"));
// app.use(
//   express.static(__dirname + "/public/", {
//     index: "home.html",
//   })
// );
// const router = express.Router();
const router = express.Router({
  caseSensitive: true,
});
app.use(router);

app.get("/", (req, res) => {
  res.send("this is home page");
});

router.post("/about", (req, res) => {
  res.send("this is home page with post request");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
