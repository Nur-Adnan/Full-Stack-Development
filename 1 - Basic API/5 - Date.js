const currentDate = new Date();
console.log("Current Date", currentDate);
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

// setting components of the date
currentDate.setFullYear(2022);
console.log("After setFullYear: ", currentDate);

currentDate.setMonth(5);
console.log("After setMonth: ", currentDate);

// get Time
console.log("Time in milliseconds since 1970: ", currentDate.getTime());

// set date

const newDate = new Date(2023, 8, 15);
console.log("New Date: ", newDate);

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 1000000; i++) {
    a = a + i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);
