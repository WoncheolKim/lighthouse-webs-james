// Example of finding callback function
// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log("Subset of even numbers:", evens);

// Example of Array.prototype.filter() from MDN
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//anonymous function
const pass01 = grades.filter(function(num) {
  return num >= 70;
});

//anonymous arrow function
const pass02 = grades.filter(num => {
  return num >= 70;
});

//call back function
const pass03 = grades.filter(function callback(num){
  return num >= 70;
});

console.log("pass grades01: ", pass01);
console.log("pass grades02: ", pass02);
console.log("pass grades03: ", pass03);