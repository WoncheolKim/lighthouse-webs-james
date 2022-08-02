const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Light", "House", "Labs"];
const numbers = [1]

describe("#tail", () => {
  it("returns 2 for words", () => {
    assert.strictEqual((tail(words).length), 2);
  });
  it("returns 0 for numbers", () => {
    assert.strictEqual((tail(numbers).length), 0);
  });
});


// //Test Code
// const words = ["Light", "House", "Labs"];
// assertEqual(words.length, 2);
// assertEqual(words.length, 3);
