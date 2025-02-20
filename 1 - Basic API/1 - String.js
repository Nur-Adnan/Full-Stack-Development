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

// substr()

const value = "Nur Adnan";
let ans1 = value.substr(2, 5); // in substr -> the last value is set for the final length of the string
let ans2 = value.slice(2, 5); // starting from 2 to 4
console.log(ans1);
console.log(ans2);

// function slice

function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(cutIt(value, 2, 5));

// replace

function replaceString(str, target, replacement) {
  console.log("Original String: ", str);
  const updatedStr = str.replace(target, replacement);
  console.log("After replace: ", updatedStr);
  return updatedStr;
}

const strR = "Hello World";
console.log(replaceString(strR, "World", "Adnan"));

// for another examples

const Ex = "Hello Adnan";
console.log(replaceString(Ex, "Adnan", "JavaScript"));
