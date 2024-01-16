import capitalize from "../code/capitalize";

describe("capitalize", () => {
  test("word", () => {
    expect(capitalize("word")).toBe("Word");
  });

  test("sentence", () => {
    expect(capitalize("this is a sentence.")).toBe("This is a sentence.");
  });

  test("already captilazie word", () => {
    expect(capitalize("WORD")).toBe("WORD");
  });
});
