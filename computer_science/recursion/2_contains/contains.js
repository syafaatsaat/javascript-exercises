const contains = function(obj, variable) {
  // const values = Object.values(obj);

  // if (values.includes(variable))
  //   return true;

  // const nestedObjects = values.filter((elem) => 
  //   elem !== null && typeof elem === 'object'
  // );

  // return nestedObjects.some((nestedObj) => 
  //   contains(nestedObj, variable)
  // );

  if (obj === variable || Object.is(obj, variable))
    return true;

  let outcome = false;
  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
    Object.values(obj).forEach(elem => {
      outcome = outcome || contains(elem, variable);
      if (outcome)
        return true;
    });
  }

  return outcome;
};
  
// Do not edit below this line
module.exports = contains;
