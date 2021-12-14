import { nArray } from '../array-utils';
import { readInput } from '../file-utils';

// Common
export const getInput = (): [string, string[]] => {
  const [firstLine, ...dictionary] = readInput('day14.txt');

  return [
    firstLine,
    dictionary.filter((value) => !!value),
  ];
}

const countChars = (countByPair: Record<string, number>): Record<string, number> => {
  const charCounts: Record<string, number> = {};
  for (const pair in countByPair) {
    const count = countByPair[pair];
    charCounts[pair[0]] = (charCounts[pair[0]] ?? 0) + count;
    charCounts[pair[1]] = (charCounts[pair[1]] ?? 0) + count;
  }

  return charCounts;
};

const buildDictionary = (pairInsertion: string[]) => {
  return pairInsertion.reduce((dictionary, pair) => {
    const [key, value] = pair.split(' -> ');
    dictionary[key] = value;

    return dictionary;
  }, {} as {[key: string]: string});
}

const increaseCount = <T>(count: number | undefined, amount: number): number => {
  return count !== undefined ? count + amount : amount;
}

const countByPair = (template: string): Record<string, number> => {
  const countByPair: Record<string, number> = {};

  nArray(template.length - 1).forEach((value, index) => {
    const pair = template[index] + template[index + 1];
    countByPair[pair] = increaseCount(countByPair[pair], 1);
  });

  return countByPair;
};

const countWithNewPairs = (countByPair: Record<string, number>, dictionary: Record<string, string>): Record<string, number> => {
  const newCounts: Record<string, number> = {};

  for (const pair in countByPair) {
    const count = countByPair[pair];
    const newChar = dictionary[pair];
    const [firstChar, secondChar] = pair.split('');
    const firstPair = firstChar + newChar;
    const secondPair = newChar + secondChar;

    newCounts[firstPair] = increaseCount(newCounts[firstPair], count);
    newCounts[secondPair] = increaseCount(newCounts[secondPair], count);
  }

  return newCounts;
};


const calculateSteps = (initialTemplate: string, pairInsertion: string[], steps: number) => {
  let countPerPair = countByPair(initialTemplate);
  const dictionary = buildDictionary(pairInsertion);

  for (let step = 0; step < steps; step++) {
    countPerPair = countWithNewPairs(countPerPair, dictionary);
  }

  const charCounts = Object.entries(countChars(countPerPair))
    .map(([, count]) => Math.ceil(count / 2));
  const sorted = charCounts.sort((a, b) => b - a);

  return sorted[0] - sorted[sorted.length - 1];
}

// Solutions
export const part1 = (initialTemplate: string, pairInsertion: string[], steps: number): number => {
  return calculateSteps(initialTemplate, pairInsertion, steps);
}


export const part2 = (initialTemplate: string, pairInsertion: string[], steps: number): number => {
  return calculateSteps(initialTemplate, pairInsertion, steps);
}

