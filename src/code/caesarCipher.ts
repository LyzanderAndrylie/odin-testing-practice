export default function caesarCipher(str: string, shiftFactor: number = 3) {
  return str.split("").reduce((prev, current) => {
    // Check current char is alphabet
    if (/^[^a-z]$/i.test(current)) return prev + current;

    // Get current char ASCII
    const asciiCurrent = current.charCodeAt(0);
    let asciiShift = asciiCurrent + shiftFactor;

    // Check current char is upper case
    const currentIsUpper = current === current.toUpperCase();
    const asciiMax = currentIsUpper ? "Z".charCodeAt(0) : "z".charCodeAt(0);
    const asciiMin = currentIsUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);

    // Wrap ASCII value
    asciiShift =
      asciiShift > asciiMax ? asciiShift - asciiMax + asciiMin - 1 : asciiShift;

    // Return cipher char in upper case
    const cipher = String.fromCharCode(asciiShift).toUpperCase();
    return prev + cipher;
  }, "");
}
