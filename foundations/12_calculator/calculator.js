const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((prev, number) => prev + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, number) => prev * number, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
	let result = 1;
  while (number > 0) {
    result *= number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
