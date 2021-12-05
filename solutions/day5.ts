import { flatten } from '../array-utils';
import { readInput } from '../file-utils';

// Common
const getInput = () => readInput('day5.txt');

const getSymbol = (n1: number, n2: number): number => {
  if ((n2 - n1) === 0) return 0;

  return (n2 - n1) > 0 ? 1 : -1;
}

const drawLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  map: (number | undefined)[][],
  withDiagonal = false,
): (number | undefined)[][] => {
  let mapWithLine = [...map];
  if ((y1 == y2 || x1 == x2) || withDiagonal) {
    const xSymbol = getSymbol(x1, x2);
    const ySymbol = getSymbol(y1, y2);
    const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

    for (let i = 0; i <= steps; i++) {
      mapWithLine = drawPoint(x1 + i * xSymbol, y1 + i * ySymbol, mapWithLine);
    }
  }

  return mapWithLine;
}

const drawPoint = (x: number, y: number, map: (number | null)[][]) => {
  const mapWithPoint = [...map];
  if (mapWithPoint[y] === undefined) {
    mapWithPoint[y] = [];
  }

  if (mapWithPoint[y][x] === undefined) {
    mapWithPoint[y][x] = 1;
  } else {
    mapWithPoint[y][x]++;
  }

  return mapWithPoint;
}

const overlappingPointsCount = (ventsMap: (number | undefined)[][] ): number =>
  flatten(ventsMap)
    .reduce((overlappingPoints: number, value: number | undefined) => {
      if (value !== undefined && value > 1) {
        overlappingPoints++;
      }

      return overlappingPoints;
    }, 0);

// Solutions
export const part1 = (ventLines: string[]): number => {
  let ventsMap: (number | undefined)[][] = [];

  ventLines.forEach((ventLine) => {
    const [start, end] = ventLine.split(' -> ');
    const [x1, y1] = start.split(',').map(Number);
    const [x2, y2] = end.split(',').map(Number);

    ventsMap = drawLine(x1, y1, x2, y2, ventsMap);
  });

  return overlappingPointsCount(ventsMap);
}

export const part2 = (ventLines: string[]): number => {
  let ventsMap: (number | undefined)[][] = [];

  ventLines.forEach((ventLine) => {
    const [start, end] = ventLine.split(' -> ');
    const [x1, y1] = start.split(',').map(Number);
    const [x2, y2] = end.split(',').map(Number);

    ventsMap = drawLine(x1, y1, x2, y2, ventsMap, true);
  });

  return overlappingPointsCount(ventsMap);
}

console.log('Solution 1: ', part1(getInput()));
console.log('Solution 2: ', part2(getInput()));
