// it's just one function call another function
function square(n) {
  return n * n;
}

function sumOfSquare(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  const sum = val1 + val2;
  return sum;
}

console.log(sumOfSquare(2, 2));

// callback function

function cube(n) {
  return n * n * n;
  //    2 x 2 x 2 = 8
}

function cubeOfSum(a, b, fn) {
  const val1 = fn(2);
  const val2 = fn(2);
  return val1 + val2;
}

console.log(cubeOfSum(2, 2, cube));

// anonymus function

function cubeOfSum(a, b, fn) {
  const val1 = fn(2);
  const val2 = fn(2);
  return val1 + val2;
}

console.log(
  cubeOfSum(2, 2, function (n) {
    return n * n * n;
    //    2 x 2 x 2 = 8
  })
);
