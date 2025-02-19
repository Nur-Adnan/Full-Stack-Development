// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace()
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Length
function getLength(str) {
  console.log("Original String: ", str);
  console.log("Length: ", str.length);
}

getLength("Hello World");

// IndexOf

function findIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index: ", str.indexOf(target));
}

findIndexOf("Hello World", "World");

// lastIndexOf()

function findLastIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Last Index of: ", str.lastIndexOf(target));
}

findLastIndexOf("Hello World World", "World");

// slice() -> it not printing the last indexm 0,5 means -> 0 to 4

function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("Slicing String: ", str.slice(start, end));
}
getSlice("Hello World", 0, 5);
