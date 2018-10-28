const assert = require('assert');

// Tests for function "sumOfOther".
const sumOfOther = require('../sumOfOther.js');

describe('sumOfOther', () => {
  it('test_1', () => {
    const array = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(array, [8, 7, 6, 9]);
  });
  it('test_2', () => {
    const array = sumOfOther([8, 7, 6, 9]);
    assert.deepEqual(array, [22, 23, 24, 21]);
  });
});

// Tests for function "make".
const make = require('../make.js');

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

describe('make', () => {
  it('test_1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });
  it('test_2', () => {
    const result = make(15)(34, 21, 6)(4)(multiply);
    assert.deepEqual(result, 257040);
  });
});

// Test for function "recursion".

const recursion = require('../recursion.js');

describe('recursion', () => {
  it('test_1', () => {
    const result = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(result, [[100], [90, 120], [70,99,110,130]]);
  });
  it('test_2', () => {
    const result = recursion({"value":100,"left":{"value":90},"right":{"value":120,"left":{"value":110}}});
    assert.deepEqual(result, [[100], [90, 120], [110]]);
  });
});