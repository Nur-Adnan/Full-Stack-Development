// map
const input = [1, 2, 3, 4, 5];
const ans = input.map(function (i) {
  return i * 2;
});

console.log(ans);

// filtering
const newArr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    newArr.push(input[i]);
  }
}
console.log(newArr);

// now here, using array filtering

const arr = ["Nur", "Adnan", "Chowdhury"];

const ansName = arr.filter((n) => {
  if (n.startsWith("N")) {
    return true;
  } else {
    return false;
  }
});

console.log(ansName);
