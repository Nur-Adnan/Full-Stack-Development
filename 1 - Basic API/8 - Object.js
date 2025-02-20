// Objects in Js

const sampleObject = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

console.log(Object.keys(sampleObject));
console.log(Object.values(sampleObject));
console.log(Object.entries(sampleObject));
console.log(sampleObject.hasOwnProperty("key3"));
console.log(sampleObject.hasOwnProperty("key"));

let newObj = Object.assign({}, Object, { newProperty: "New Value" });
console.log(newObj);
