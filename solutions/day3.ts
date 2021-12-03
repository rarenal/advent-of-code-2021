import { readInput } from '../file-utils';

// Common
const inputArray = readInput('day3.txt');

const transpose = <T>(matrix: T[][]): T[][] =>
  matrix[0].map((column, columnIndex) => matrix.map((row, rowIndex) => matrix[rowIndex][columnIndex]));

const byNumber = (a: string, b:string) => Number(a) - Number(b);

const mostFrequentBinary = (binaryArr: string[]) => {
  const middleNextIndex = Math.floor(binaryArr.length / 2);
  const sortedArray = binaryArr.sort(byNumber);
  const isEqual = sortedArray.length % 2 === 0 && sortedArray[middleNextIndex] !== sortedArray[middleNextIndex - 1];

  return isEqual ? '1' : sortedArray[middleNextIndex];
}

const reverseBinary = (binary: string) => `${Number(!Boolean(Number(binary)))}`;

const toDecimal = (binary: string) => parseInt(binary, 2);

const filterOnEachPosition = (positionCount: number, initialArr: string[][], filterFn: (item: string[]) => string) => {
  let filteredArr = [...initialArr];
  for (let i=0; i < positionCount; i++) {
    if (filteredArr.length === 1) break;

    const transposedArr = transpose(filteredArr);
    filteredArr = filteredArr.filter((arr) => arr[i] === filterFn(transposedArr[i]));
  }
  return filteredArr;
}

// Solutions
export const part1 = (inputArray: string[]): number => {
  const binariesMatrix = inputArray.map((binary) => binary.split(""));
  const matrixBySamePosition = transpose(binariesMatrix);

  const gammaRate = matrixBySamePosition.map(mostFrequentBinary).join('');
  const epsilonRate = gammaRate.split('').map(reverseBinary).join('');

  return toDecimal(gammaRate) * toDecimal(epsilonRate);
}

export const part2 = (inputArray: string[]): any => {
  const binariesMatrix = inputArray.map((binary) => binary.split(""));
  const binaryLength = binariesMatrix[0].length;

  const oxygenRating = filterOnEachPosition(binaryLength, binariesMatrix, mostFrequentBinary)[0].join('');
  const co2Rating = filterOnEachPosition(binaryLength, binariesMatrix, (item) => reverseBinary(mostFrequentBinary(item)))[0].join('');

  return toDecimal(oxygenRating) * toDecimal(co2Rating);
}

console.log('Solution 1: ', part1(inputArray));
console.log('Solution 2: ', part2(inputArray));