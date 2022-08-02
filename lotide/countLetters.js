// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} != ${expected}`);
//   }
// };

const countLetters = function(string) {
  const resultObject = {}
  for (let i = 0; i < string.length; i++) {
    if (resultObject[string[i]]) {
      resultObject[string[i]] = resultObject[string[i]] + 1;
    } else {
      resultObject[string[i]] = 1
    }
  }
  console.log(resultObject);
  return resultObject;
}

countLetters("lighthouse")

// bring string, 

// make empty object to store key:string & value:number 

// counting each letters 

// loop the string + counting

// add key value pair

// return object

module.exports = countLetters;
