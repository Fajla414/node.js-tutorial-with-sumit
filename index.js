// const path = require("path");
// const myPath = "C:/Users/Fajla/OneDrive/Desktop/Node.js Tutorial/index.js";
// console.log(path.basename(myPath));

// const os = require("os");
// const myPath = "C:/Users/Fajla/OneDrive/Desktop/Node.js Tutorial/index.js";
// console.log(os.cpus());

// const fs = require("fs");
// fs.writeFileSync("myfile.txt", "Hello programmers");
// fs.appendFileSync("myfile.txt", "How are you");

// fs.readFile("myfile.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });
// const data = fs.readFileSync("myfile.txt");
// console.log(data.toString());

// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("bellRing", (period) => {
//   console.log("We need to run! because " + period);
// });
// // setTimeout(() => {
// //   emitter.emit("bellRing");
// // }, 2000);
// // emitter.emit("bellRing");
// emitter.emit("bellRing", "second period ended");
// emitter.emit("bellRing", {
//   period: "first",
//   text: "period ended",
// });

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("how are you doing");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is about us page");
    res.end();
  } else {
    res.write("not found");
    res.end();
  }
});
server.listen(3000);
console.log("listening on http://localhost:3000");
