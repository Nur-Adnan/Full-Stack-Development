function explainParseInt(value) {
  console.log("Original Value: ", value);
  let result = parseInt(value);
  const updated = console.log("After parseInt: ", result);
  return updated;
}
// example
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14PI");
explainParseInt("PI3.14");
