const num = String(process.argv.slice(2));
const roll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

let dice = [];
for (let i = 0; i < num; i++) {
  dice.push(roll());
}

console.log("Rolled " + Number(num) + " dice : " + dice.join(" "));
