function forEach(array, callback) {
  let newArr = [...array]
  for (let i = 0; i < newArr.length; i++) {
    callback(newArr[i], i, array);
  }



}
function map(array, callback) {
  let newArr = [];
  for (let variable of array) {
    newArr.push(callback(variable));}
  return newArr;
}

function filter(array, callback) {
  let newArr = [];
  for (let variable of array) {
    if (callback(variable) === true) {
      newArr.push(variable);}
    }
  return newArr;
}



function every(array, callback) {
  let control;
  for (let variable of array) {
    if (callback(variable) === true) {
      control = true;}
    else {
      control = false;
      return control;}
    }
  return control;
}



function some(array, callback) {
  let control;
  for (let variable of array) {
    if (callback(variable) === false) {
      control = false;}
    else {
      control = true;
      return control;}
    }
  return control;
}

function majority(array, callback) {
  let trueValues = 0;
  let falseValues = 0;
  for (let variable in array) {
    if (callback(variable) === true) {
      trueValues++;
    }
    else {
      falseValues++;
    }
  }
  if (trueValues > falseValues) return true;
  else return false;
}
let onceVariable = 0;
let firstInvocation;
function once(callback) {
  return function () {
    if (onceVariable === 0) {
      firstInvocation = callback(arguments[0]);
      onceVariable++;
      return firstInvocation;
    }
    else {
      return firstInvocation;
    }
  }
};



function groupBy(array, callback) {
  const newObject = {};
  let newArr = [];
  for (let iteration of array) {
    let key = callback(iteration);
    if (newObject[key]===undefined) {
      newArr = [];
    }
    newArr.push(iteration)
    newObject[key] = newArr;
  }
  return newObject;
}
function arrayToObject(array, callback) {
  const newObject={};
  for (let iteration of array){
    newObject[iteration]=callback(iteration);
  }
  return newObject;
}

module.exports = {
  forEach,
  map,
  filter,
  every,
  some,
  majority,
  once,
  groupBy,
  arrayToObject,
};