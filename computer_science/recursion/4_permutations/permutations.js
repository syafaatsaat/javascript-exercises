const permutations = function(arr) {
  if (arr.length <= 1)
    return [arr];

  const perms = [];
  for (let i = 0; i < arr.length; ++i) {
    let remainingElems = arr.toSpliced(i, 1);

    permutations(remainingElems).forEach(
      (subPerms) => perms.push([...[arr[i]], ...subPerms])
    );
  }

  return perms;
};
  
// Do not edit below this line
module.exports = permutations;
