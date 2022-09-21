const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(700000, 300000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2,-3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract simple positive numbers',() => {
    expected = 5;
    actual = subtract(10,5);
    expect(actual).toBe(expected);
  });

  test('can subtract negative numbers',() => {
    expected = -5;
    actual = subtract(-10,-5);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multipliy positive numbers',() => {
    expected = 50;
    actual = multiply(10,5);
    expect(actual).toBe(expected);
  });

  test('can multipliy negative numbers',() => {
    expected = 50;
    actual = multiply(-10,-5);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide positive numbers',() => {
    expected = 2;
    actual = divide(10,5);
    expect(actual).toBe(expected);
  });

  test('can divide negative numbers',() => {
    expected = 2;
    actual = divide(-10,-5);
    expect(actual).toBe(expected);
  });

  test('cannot divide by 0',() => {
    expected = console.error("Cannot divide by 0");
    actual = divide(10,0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can get a remainder',() => {
    expected = 1;
    actual = modulus(10,3);
    expect(actual).toBe(expected);
  });

  test('can get a remainder of 0',() => {
    expected = 0;
    actual = modulus(9,3);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can return true if even',() => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('can return false if not even',() => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can return true if odd',() => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  });

  test('can return false if not odd',() => {
    expected = false;
    actual = odd(4);
    expect(actual).toBe(expected);
  });

});
