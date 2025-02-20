// Array handbook

// Array: push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

//push
const initArray1 = [1, 2, 4];
initArray1.push(3);
console.log(initArray1);

//pop
const initArray2 = [1, 2, 4];
initArray2.pop();
console.log(initArray2);

// shift

const initArray3 = [1, 2, 3, 4];
initArray3.shift();
console.log(initArray3);

//unshift

const initArray4 = [2, 3, 4, 5];
initArray4.unshift(1);
console.log(initArray4);

// concat

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
console.log(firstArray.concat(secondArray));

// foreach
for (let i = 0; i < firstArray.length; i++) {
  console.log(firstArray[i]);
}

function logThing(str) {
  console.log(str);
}

// [1, 2, 3]
firstArray.forEach(logThing);

logThing(1);
logThing(2);
logThing(3);

function log1() {
  console.log("Hello World");
}

function log2() {
  console.log("Hello Adnan");
}

function logWhatPresent(fn) {
  fn();
}

logWhatPresent(log2);
logWhatPresent(log1);
