import Calculator from "../code/calculator";

describe("basic operations", () => {
  test("add 1 + 1", () => {
    expect(Calculator.add(1, 1)).toBe(2);
  });

  test("add 1 + 2", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test("subtract 1 - 1", () => {
    expect(Calculator.subtract(1, 1)).toBe(0);
  });

  test("subtract 1 - 2", () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });

  test("multiply 1 x 1", () => {
    expect(Calculator.multiply(1, 1)).toBe(1);
  });

  test("multiply 1 x 0", () => {
    expect(Calculator.multiply(1, 0)).toBe(0);
  });

  test("divide 1 / 1", () => {
    expect(Calculator.divide(1, 1)).toBe(1);
  });

  test("divide 1 / 0", () => {
    expect(() => Calculator.divide(1, 0)).toThrow();
  });
});
