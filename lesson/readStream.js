// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// ourReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, "utf-8");
// ourReadStream.on("data", (data) => {
//   console.log(data);
// });
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// ourReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });

//

// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });
// ourReadStream.pipe(ourWriteStream);

//

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<html><head><title>Form</title></head>");
//     res.write(
//       '<body><form method="post" action="/process"><input name="message"/></form></body>'
//     );
//     res.end();
//   } else if (req.url === "/process" && req.method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       // console.log(chunk.toString());
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       console.log("stram finished");
//       const parseBody = Buffer.concat(body).toString();
//       console.log(parseBody);
//       res.write("Thank you");
//       res.end();
//     });

//     // res.write("Thank you");
//     // res.end();
//   } else {
//     res.write("not found");
//     res.end();
//   }
// });
// server.listen(3000);
// console.log("listening on http://localhost:3000");
