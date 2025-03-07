function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

// busy waiting
function syncSleep() {
  let a = 1;
  for (let i; i < 10000; i++) {
    a++;
  }
}

syncSleep();
// setTimeout(findSumTill100, 1000);
console.log("Hello World");

// another example

setTimeout(function () {
  console.log("Hi There !");
  setTimeout(function () {
    console.log("Hi Adnan !");
  }, 2000);
}, 1000);
