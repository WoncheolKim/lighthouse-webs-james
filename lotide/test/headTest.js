// const head = require('../head');
// const assertEqual = require('../assertEqual');

// //Test Code
// assertEqual(head(["Light", "House", "Labs"]), "Light");
// assertEqual(head(["Light", "House", "Labs"]), "House");

const assert = require('chai').assert;
const head = require('../head');
console.log(assert);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

