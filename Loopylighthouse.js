// the range 100 to 200
// the string "Loopy", "Lighthouse" and "LoopyLighthouse"
// the multiples 3 and 4

// for (let num = 100; num <= 200; num++) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   } else if (num % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(num);
//   }
// }

let output = "";{

if (num % 3 === 0) {
  output += "Loopy";
}

if (num % 4 === 0) {
  output += "Lighthouse";
}
console.log(output === "" ? num : output);
}
