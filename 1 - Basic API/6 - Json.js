const userJson = {
  name: "Adnan",
  age: 24,
  gender: "male",
};

console.log(userJson["name"]);
const finalString = JSON.stringify(userJson);
console.log(finalString);

const userString = '{"name": "Adnan","age": 24,"gender": "male"}';

const uString = JSON.parse(userString);
console.log(uString["gender"]);
