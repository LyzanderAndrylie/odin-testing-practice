import analyzeArray from "../code/analyzeArray";

describe("analyze array", () => {
  test("average", () => {
    expect(analyzeArray([1, 1, 1]).average).toBe(1);
  });
  test("min", () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
  });
  test("max", () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
  });
  test("length", () => {
    expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
  });
  test("all properties", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
      average: 5,
      min: 1,
      max: 9,
      length: 9,
    });
  });
  test("length of 0", () => {
    expect(analyzeArray([])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });
});
