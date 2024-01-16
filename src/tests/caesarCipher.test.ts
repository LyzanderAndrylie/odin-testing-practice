import caesarCipher from "../code/caesarCipher";

describe("caesar cipher", () => {
  test("word", () => {
    expect(caesarCipher("test")).toBe("WHVW");
  });

  test("punctuation", () => {
    expect(caesarCipher("._.")).toBe("._.");
  });

  test("wrapping with lower case", () => {
    expect(caesarCipher("wxyz")).toBe("ZABC");
  });

  test("wrapping with upper case", () => {
    expect(caesarCipher("WXYZ")).toBe("ZABC");
  });
});

describe("ROT13", () => {
  const shiftFactor = 13;
  
  test("word", () => {
    expect(caesarCipher("test", shiftFactor)).toBe("GRFG");
  });

  test("punctuation", () => {
    expect(caesarCipher("._.", shiftFactor)).toBe("._.");
  });

  test("wrapping with lower case", () => {
    expect(caesarCipher("wxyz", shiftFactor)).toBe("JKLM");
  });

  test("wrapping with upper case", () => {
    expect(caesarCipher("WXYZ", shiftFactor)).toBe("JKLM");
  });
});
