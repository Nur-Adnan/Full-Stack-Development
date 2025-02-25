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
  console.log("Inside adnanCleanerWay");
  return new Promise(function (resolve) {
    console.log("Inside new Promise");
    fs.readFile("a.txt", "utf-8", function (error, data) {
      console.log("Before resolve");
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

// pending, resolved
let a = adnanCleanerWay();
console.log(a);
a.then(onDone);

// more example

let d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Foo");
  }, 1000);
});

function callback() {
  console.log(d);
}

console.log(d); // pending
d.then(callback); // resolved
