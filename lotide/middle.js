const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex -1], array[middleIndex]];
  } else if (array.length % 3 === 0) {
    return [array[middleIndex]];
  }
};

module.experts = middle;
