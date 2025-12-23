const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    
    let fibArray = [0, 1];
    if (number < 2) {
        return fibArray[number];
    }

    for (let i = 2; i <= number; ++i) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray[number];
};

// Do not edit below this line
module.exports = fibonacci;
