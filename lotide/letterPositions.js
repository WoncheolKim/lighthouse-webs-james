const eqArrays = function(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    // console.log(firstArr[i], secondArr[i])
      if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for(let index = 0; index < sentence.length; index++) {
    const letter = sentence[index]
    if(!results[letter]) {
      results[letter]= [index]
    } else {
      results[letter].push(index)
    }
   }
  //  console.log(results)
  return results;
}
const helloObject = {
  h:[0],
  e:[1],
  l:[2, 3],
  o:[4]
}
const sentence = "hello"

const results = letterPositions(sentence) 
// for(let letter of sentence) {
//   const letterPositionsArray = helloObject[letter]
//   const resultsLetterPositionArray = results[letter]
//   assertArrayEqual(letterPositionsArray, resultsLetterPositionArray)
// }

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);