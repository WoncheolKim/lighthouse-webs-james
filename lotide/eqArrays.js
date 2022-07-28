// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  console.log('firstArr', firstArr)
  console.log('secondArr', secondArr)
  for (let i = 0; i < firstArr.length; i++) {
    console.log('index', i)
    console.log('i value', firstArr[i])
    console.log('second i value', secondArr[i])
    console.log(firstArr[i] === secondArr[i])
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}


// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

