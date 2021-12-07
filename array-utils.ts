export const transpose = <T>(matrix: T[][]): T[][] =>
  matrix[0].map((column, columnIndex) => matrix.map((row, rowIndex) => matrix[rowIndex][columnIndex]));

export const sumArrayValues = (numberArray: number[]): number => {
  return  numberArray.reduce((sum, value) => sum + value)
}

export const flatten = <T>(array: T[][]): T[] =>
  [].concat.apply([], array);

export const minMax = (array: number[]): [number, number] =>
  [Math.min(...array), Math.max(...array)];