// Example 1
// Can export a number (not common, but JS won't stop me!)
module.exports = 5;

// Example 2
// Can export an object (quite common!)
module.exports = { 
  firstName: "Lighthouse",
  lastName:  "Labs"
}

// Example 3
// Can export a function (we did this for all our functions)
module.exports = function() {
  return "developers, developers, developers!"; 
}

// Etc.

// index.js
const assertArraysEqual = require('./assertArraysEqual');	
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');


module.exports = {
  assert,
  assertArraysEqual,
	assertEqual,
	assertObjectsEqual,
	countLetters,
	countOnly,
	eqArrays,
	eqObjects,
	findKey,
	findKeyByValue,
	head,
	letterPositions,
	map,
  middle,
  tail,
};