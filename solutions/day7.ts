import { minMax } from '../array-utils';
import { readRawInput } from '../file-utils';

// Common
const getInput = () => readRawInput('day7.txt').split(',').map(Number);

const scaleSteps = (steps: number): number =>
  Array(steps)
    .fill(null)
    .reduce((fuel, value, index) => fuel + index + 1, 0);

const calculateScaledFuel = (crabs: number[], position: number): number =>
  crabs.reduce((fuel, crabPosition) =>
    fuel + scaleSteps(Math.abs(crabPosition - position)), 0);

const calculateFuel = (crabs: number[], position: number): number =>
  crabs.reduce((fuel, crabPosition) =>
    fuel + Math.abs(crabPosition - position), 0);

const calculateMinFuel = (crabsPosition: number[], calcFn: (arr:number[], position: number) => number): number => {
  const [min, max] = minMax(crabsPosition);

  return Array(max - min).fill(0).reduce((minFuel, _, index) => {
    const i = min + index;
    const fuelForPosition = calcFn(crabsPosition, i);
    return !minFuel || minFuel > fuelForPosition
      ? fuelForPosition
      : minFuel;
  }, 0);
}

// Solutions
export const part1 = (crabsPosition: number[]): number => {
  return calculateMinFuel(crabsPosition, calculateFuel);
}

export const part2 = (crabsPosition: number[]): any => {
  return calculateMinFuel(crabsPosition, calculateScaledFuel);
}

console.log('Solution 1: ', part1(getInput()));
console.log('Solution 2: ', part2(getInput()));