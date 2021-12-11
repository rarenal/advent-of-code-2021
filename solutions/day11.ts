import { adjacency, deepEqual, getElementSafe } from '../array-utils';
import { readInput } from '../file-utils';

// Common
export const getInput = () => readInput('day11.txt');

interface Octopus {
  energy: number;
  flashed: boolean;
}

const calculateFlashes = (initialOctopuses: Octopus[][], flashedCount: number): [Octopus[][], number] => {
  const updatedEnergy = initialOctopuses.map((value) => [...value]);

  updatedEnergy.forEach((row, i) => {
    row.forEach((octopus, j) => {
      if (octopus.energy > 9 && !octopus.flashed) {
        flashedCount++;
        updatedEnergy[i][j].flashed = true;
        adjacency.forEach((adjacent) => {
          if (getElementSafe(updatedEnergy,i + adjacent.i, j + adjacent.j) !== undefined) {
            updatedEnergy[i + adjacent.i][j + adjacent.j].energy++;
          }
        })
      }
    })
  });

  if (deepEqual(initialOctopuses, updatedEnergy)) {
    return [updatedEnergy, flashedCount];
  } else {
    return calculateFlashes(updatedEnergy, flashedCount);
  }
}

// Solutions
export const part1 = (input: string[], steps = 100): number => {
  let octopuses: number[][] = input.map((row => row.split('').map(Number)));
  let totalFlashedCount = 0;

  for (let i = 0; i < steps; i++) {
    const initialOctopuses = octopuses.map((row) => row.map((energy) => ({energy: energy + 1, flashed: false})));

    const [flashedOctopuses, flashedCount] = calculateFlashes(initialOctopuses, 0);
    totalFlashedCount += flashedCount;
    octopuses = flashedOctopuses.map((row) => row.map((octopus => octopus.flashed ? 0 : octopus.energy)));
  }

  return totalFlashedCount;
}

export const part2 = (input: string[]): number => {
  let octopuses: number[][] = input.map((row => row.split('').map(Number)));
  const totalOctopuses = octopuses.length * octopuses[0].length;
  let allFlashed = false;
  let step = 0;

  while (!allFlashed) {
    step++;
    const initialOctopuses = octopuses.map((row) => row.map((energy) => ({energy: energy + 1, flashed: false})));

    const [flashedOctopuses, flashedCount] = calculateFlashes(initialOctopuses, 0);
    octopuses = flashedOctopuses.map((row) => row.map((octopus => octopus.flashed ? 0 : octopus.energy)));

    if (flashedCount === totalOctopuses) {
      allFlashed = true;
    }
  }

  return step;
}