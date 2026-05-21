const totalIntegers = function(input) {
  if (typeof input !== 'object' && !Array.isArray(input)) {
    return undefined;
  }

  let inputArray = input;
  if (typeof input === 'object')
    inputArray = Object.values(input);

  let total = inputArray
    .filter(
      (elem) => 
        elem !== null && (typeof elem === 'object' || Array.isArray(elem))
    )
    .map((elem) => totalIntegers(elem))
    .reduce((accum, curr) => accum + curr, 0);
  
  return total + inputArray.filter((elem) => Number.isInteger(elem)).length;
};
  
// Do not edit below this line
module.exports = totalIntegers;
