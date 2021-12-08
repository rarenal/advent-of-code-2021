import { splitBySpaces } from '../array-utils';
import { readInput } from '../file-utils';

// Common
const getInput = () => readInput('day8.txt')

const isFirstCharsInSecond = (first: string, second: string) => {
  return first.split('').every(char => second.includes(char));
}

const getFiveSegmentsNumber = (segment: string, patterns: string[]): number => {
  const onePattern = patterns.find(pattern => pattern.length === 2);
  const sixPattern = patterns.filter(pattern => pattern.length === 6)
    .find(segment => getSixSegmentsNumber(segment, patterns) === 6);

  if (isFirstCharsInSecond(onePattern, segment)) {
    return 3;
  } else if (isFirstCharsInSecond(segment, sixPattern)) {
    return 5;
  }

  return 2;
}

const getSixSegmentsNumber = (segment: string, patterns: string[]): number => {
  const fourPattern = patterns.find(pattern => pattern.length === 4);
  const onePattern = patterns.find(pattern => pattern.length === 2);

  if (isFirstCharsInSecond(fourPattern, segment)) {
    return 9;
  } else if (isFirstCharsInSecond(onePattern, segment)) {
    return 0;
  }

  return 6;
}

const getNumber = (segment: string, patterns: string[]): number | null => {
  switch (segment.length) {
    case 2: return 1;
    case 3: return 7;
    case 4: return 4;
    case 7: return 8;
    case 5: return getFiveSegmentsNumber(segment, patterns);
    case 6: return getSixSegmentsNumber(segment, patterns);
    default: throw 'unknown number';
  }
}

const isOneFourSevenOrEight = (value: number) => value === 1 || value === 7 || value === 4 || value === 8;

// Solutions
export const part1 = (lines: string[]): number => {
  return lines.reduce((totalUnique, line) => {
    const [patterns ,segments] = line.split('|');

    const uniqueCount = splitBySpaces(segments)
      .reduce(((uniqueCount,segment) => {
        const number = getNumber(segment, splitBySpaces(patterns));

        return isOneFourSevenOrEight(number) ? uniqueCount + 1 : uniqueCount;
      }), 0);

    return totalUnique + uniqueCount;
  }, 0);
}

export const part2 = (lines: string[]): number => {
  return lines.reduce((total, line) => {
    const [patterns, segments] = line.split('|');

    const segmentString = splitBySpaces(segments)
      .reduce((segmentNumber,segment) => {
        const number = getNumber(segment, splitBySpaces(patterns));

        return segmentNumber += `${number}`;
      }, '');

    return total + +segmentString;
  }, 0);
}

console.log('Solution 1: ', part1(getInput()));
console.log('Solution 2: ', part2(getInput()));