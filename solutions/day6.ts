import { flatten, sumArrayValues } from '../array-utils';
import { readRawInput } from '../file-utils';

// Common
const getInput = () => readRawInput('day6.txt')
                        .split(',')
                        .map(Number);

// iterating over each day and fish causes OOM issues, so an alternative is to keep track of the amount of
// fishes per age and update it every day
const lanternFishAfterDays = (days: number, initial: number[]): number => {
  let fishPerAge = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // [0 days, 1 day, 2 days, 3 days...]
  initial.forEach(fishAge => {
    fishPerAge[fishAge]++;
  });
  for (let day = 0; day < days; day++) {
    const newFish = fishPerAge.shift(); // remove fish at 0 age
    fishPerAge.push(newFish); // add new fish at age 8
    fishPerAge[6] += newFish; // update fish at age 6
  }

  return sumArrayValues(fishPerAge);
}

// Solutions
export const part1 = (initialLanternFish: number[], days: number): number => {
  return lanternFishAfterDays(days, initialLanternFish);
}

export const part2 = (initialLanternFish: number[], days: number): number => {
  return lanternFishAfterDays(days, initialLanternFish);
}

console.log('Solution 1: ', part1(getInput(), 80));
console.log('Solution 2: ', part2(getInput(), 256));