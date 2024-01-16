export default function reverseString(str: string) {
  return str.split("").reduce((prev, current) => current + prev, "");
}
