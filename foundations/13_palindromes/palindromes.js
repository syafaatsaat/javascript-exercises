const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;
    string = string.toLowerCase();
    while (left < right) {
        if (string[left] === " " 
            || /^[a-z0-9]$/i.test(string[left]) === false) {
            left++;
            continue;
        }
        
        if (string[right] === " " 
            || /^[a-z0-9]$/i.test(string[right]) === false) {
            right--;
            continue;
        }

        console.log(string[left] + " " + string[right]);

        if (string[left] !== string[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

//console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
