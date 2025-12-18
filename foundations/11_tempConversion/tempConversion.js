function roundOffToOneDec(num) {
  return Number(Number.parseFloat(num).toFixed(1));
}

const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  return Number.isInteger(celsius) ?
    celsius : 
    roundOffToOneDec(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  return Number.isInteger(fahrenheit) ?
    fahrenheit :
    roundOffToOneDec(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
