const pascal = function(n) {
  if (n === 1)
    return [1];

  const prevRow = pascal(n - 1);
  let currRow = [];
  for (let i = 0; i < n; ++i) {
    let left = i - 1;
    let right = i;
    let val = 0;

    if (left >= 0)
      val += prevRow[left];

    if (right < prevRow.length)
      val += prevRow[right];

    currRow.push(val);
  }

  return currRow;
};
  
// Do not edit below this line
module.exports = pascal;
