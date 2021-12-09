import { getElementSafe, transpose } from '../array-utils';
import { readInput } from '../file-utils';

// Common
const getInput = () => readInput('day9.txt').map((input) => input.split('').map(Number));

const adjacents = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function isLowest(lavaTubes: number[][], rowIndex: number, columnIndex: number) {
  const number = lavaTubes[rowIndex][columnIndex];
  const adjacents = [
    getElementSafe(lavaTubes,rowIndex - 1,columnIndex),
    getElementSafe(lavaTubes,rowIndex + 1,columnIndex),
    getElementSafe(lavaTubes, rowIndex, columnIndex - 1),
    getElementSafe(lavaTubes, rowIndex,columnIndex + 1),
  ];

  return adjacents.every((adjacent) => adjacent === undefined || number < adjacent);
}

// Solutions
export const part1 = (lavaTubes: number[][]): number =>
  lavaTubes.reduce((riskLevel, row, rowIndex) =>
    riskLevel + row.reduce((rowRisk, lavaTube, columnIndex) =>
      isLowest(lavaTubes, rowIndex, columnIndex)
        ? rowRisk + lavaTube + 1
        : rowRisk, 0), 0);

export const part2 = (lavaTubes: number[][]): number =>
  (lavaTubes =>
    lavaTubes
      .map((row, rowIndex) => row.map((_, columnIndex) => [columnIndex, rowIndex]))
      .flat()
      .reduce((sizes, [columnIndex, rowIndex]) => {
        if (lavaTubes[rowIndex][columnIndex]) {
          let size = 0;
          const queue = [[columnIndex, rowIndex]];
          while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (lavaTubes[y][x]) {
              lavaTubes[y][x] = 0;
              queue.push(
                ...adjacents.map(([dx, dy]) => [dx + x, dy + y]).filter(
                  ([nx, ny]) => lavaTubes[ny]?.[nx]
                )
              );
              size++;
            }
          }
          sizes.push(size);
        }
        return sizes;
      }, [])
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((mul, v) => mul * v))(
    lavaTubes.map(row => row.map(c => (c + 1) % 10))
  );

console.log('Solution 1: ', part1(getInput()));
console.log('Solution 2: ', part2(getInput()));