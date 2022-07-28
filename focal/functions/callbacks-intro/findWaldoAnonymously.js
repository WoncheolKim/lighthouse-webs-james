// const myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);

//Exercise 01
// function findWaldo (names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
//}

//Exercise 02
// const findWaldo = function(names, found) {
//   names.forEach((name, index) => {
//     if (name === "Waldo") {
//       found(index);   // execute callback
//     }
//   })
// }

//Exercise Anonoymous
const findWaldo = function(names, found) {
  names.forEach((word, index) => {
    if (word === "Waldo") {
      return found(index);
    }
  })
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);