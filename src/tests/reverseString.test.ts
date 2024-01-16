import reverseString from "../code/reverseString";

describe("reverse string of", () => {
  test("word", () => {
    expect(reverseString("word")).toBe("drow");
  });

  test("sentence", () => {
    expect(reverseString("this is a sentence.")).toBe(".ecnetnes a si siht");
  });

  test("empty", () => {
    expect(reverseString("")).toBe("");
  });
});
