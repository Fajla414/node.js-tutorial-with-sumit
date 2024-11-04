// app.get(name)
const express = require("express");
const app = express();

app.get("title");
// => undefined

app.set("title", "My Site");
app.get("title");
// => "My Site"

app.listen(3000, () => {
  console.log("listening on port 3000");
});
