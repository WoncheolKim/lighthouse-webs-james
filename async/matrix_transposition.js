const transpose = function (matrix) {
  // for loop
  let newArray = [];
  for (let y = 0; y < matrix[0].length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (!newArray[y]) {
        newArray[y] = [matrix[x][y]];
      } else if (newArray[y]) {
        newArray[y].push(matrix[x][y]);
      }
    }
  }
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

console.log("----");

// Test code
printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

