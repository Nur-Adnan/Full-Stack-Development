// ugly way
const fs = require("fs");

function adnanUglyWay(callback) {
  fs.readFile("a.txt", "utf-8", function (error, data) {
    callback(data);
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

adnanUglyWay(onDone);

// it works like, in the adnanUglyWay function, we pass onDone as a callback function

// cleaner way to write a async function

function adnanCleanerWay() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (error, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

adnanCleanerWay().then(onDone);
