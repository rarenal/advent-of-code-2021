export const transpose = <T>(matrix: T[][]): T[][] =>
  matrix[0].map((column, columnIndex) => matrix.map((row, rowIndex) => matrix[rowIndex][columnIndex]));

export const sumArrayValues = (numberArray: number[]): number => {
  return  numberArray.reduce((sum, value) => sum + value)
}

export const isTruthy = <T>(value: T) => !!value

export const splitBySpaces = (value: string) => value.split(' ').filter(isTruthy);

export const flatten = <T>(matrix: T[][]): T[] => {
  const flattened: T[] = [];
  matrix.forEach((array) => {
    flattened.push(...array);
  });

  return flattened;
}

export const minMax = (array: number[]): [number, number] =>
  [Math.min(...array), Math.max(...array)];

export const getElementSafe = <T>(matrix: T[][], rowIndex: number, columnIndex: number): T | undefined => {
  if (matrix[rowIndex] === undefined) {
    return undefined;
  }

  return matrix[rowIndex][columnIndex];
}

export const deepEqual = <T>(a: T[][], b: T[][]) =>
  a.every((row, i) => row.every((value, j) => value === b[i][j]));

export interface Adjacent {
  i: number;
  j: number;
}

export const adjacency: Adjacent[] = [
  {i: 0, j: 1},
  {i: 0, j: -1},
  {i: 1, j: -1},
  {i: 1, j: 1},
  {i: 1, j: 0},
  {i: -1, j: 0},
  {i: -1, j: -1},
  {i: -1, j: 1},
];

export const nArray = (n: number) => Array(n).fill(null);