const findKeyByValue = function (obj, val) {
  for (const key of Object.keys(obj)) {
    if(obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
