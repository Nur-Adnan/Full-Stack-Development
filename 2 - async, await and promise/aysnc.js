const fs = require("fs");
// file system
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hi There");
