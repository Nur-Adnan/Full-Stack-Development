function adnanAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There !");
    }, 3000);
  });
  return p;
}

async function main() {
  // no callbacks, no .then syntax
  const value = adnanAsyncFunction().then(function (value) {
    console.log(value);
  });
  //   let value = await adnanAsyncFunction();
  console.log("Hi there 1");
  console.log(value);
}

main();




