export type AnalyzeResult = {
  average: number;
  min: number;
  max: number;
  length: number;
};

export default function analyzeArray(arr: number[]): AnalyzeResult {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: getLength(arr),
  };
}

function average(arr: number[]) {
  if (arr.length === 0) return 0;

  const sumElement = arr.reduce((prev, current) => prev + current, 0);
  const totalElement = arr.length;
  return sumElement / totalElement;
}

function min(arr: number[]) {
  if (arr.length === 0) return 0;

  return arr.reduce((prev, current) => (current < prev ? current : prev));
}

function max(arr: number[]) {
  if (arr.length === 0) return 0;
  
  return arr.reduce((prev, current) => (current > prev ? current : prev));
}

function getLength(arr: number[]) {
  return arr.length;
}
