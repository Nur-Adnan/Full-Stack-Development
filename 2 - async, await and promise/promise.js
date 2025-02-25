// ugly way
const fs = require("fs");

function adnanReadFile(callback) {
  fs.readFile("a.txt", "utf-8", function (error, data) {
    callback(data);
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

adnanReadFile(onDone);

// it works like, in the adnanReadFile function, we pass onDone as a callback function



