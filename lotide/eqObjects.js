const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length === Object.keys(object2).length) {
    let objectkeys = Object.keys(object2)
    for(let x in object1) {
      if(!objectkeys.includes(x)) {
         return false;
      }
      if(object1[x] !== object2[x]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

//From eqArray
// const eqArrays = function(firstArr, secondArr) {
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] !== secondArr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;
