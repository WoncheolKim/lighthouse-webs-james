// const myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);

function findWaldo (index, found) {
  for (let i = 0; i < index.length; i++) {
    let name = index[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);