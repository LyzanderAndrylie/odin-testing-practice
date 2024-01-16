export default class Calculator {
  static add(augend: number, addend: number) {
    return augend + addend;
  }

  static subtract(minuend: number, subtrahend: number) {
    return minuend - subtrahend;
  }

  static multiply(multiplicand: number, multiplier: number) {
    return multiplicand * multiplier;
  }

  static divide(dividend: number, divisor: number) {
    if (divisor === 0) throw new Error('Division by 0');

    return dividend / divisor;
  }
}
