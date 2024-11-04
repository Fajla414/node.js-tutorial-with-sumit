// app.path()
const express = require("express");
const app = express();
const blog = express();
const blogAdmin = express();

app.use("/blog", blog);
blog.use("/admin", blogAdmin);

console.log(app.path()); // ''
console.log(blog.path()); // '/blog'
console.log(blogAdmin.path()); // '/blog/admin'

app.listen(3000, () => {
  console.log("listening on port 3000");
});
