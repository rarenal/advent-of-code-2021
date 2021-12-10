import { readInput } from '../file-utils';

// Common
export const getInput = () => readInput('day10.txt')
const openingChars = ['[','(','{','<'];
const closingChars = [']',')','}','>'];

const errorScoreForChar = (char: string) => {
  switch (char) {
    case ')': return 3;
    case ']': return 57;
    case '}': return 1197;
    case '>': return 25137;
    default: return 0;
  }
}

const completionScoreForChar = (char: string) => {
  switch (char) {
    case ')': return 1;
    case ']': return 2;
    case '}': return 3;
    case '>': return 4;
    default: return 0;
  }
}

const incorrectCharInLine = (line: string): [string | undefined, string[]] => {
  const pendingClose: string[] = [];
  let failedChar: string;

  line.split('').some((char) => {
    const openingCharIndex = openingChars.indexOf(char);
    if (openingCharIndex !== -1) {
      pendingClose.push(closingChars[openingCharIndex]);
    } else {
      const lastOpenedChar = pendingClose[pendingClose.length - 1];

      if (lastOpenedChar === char) {
        pendingClose.pop();
      } else {
        failedChar = char;
        return true;
      }

    }
    return false;
  });

  return [failedChar, pendingClose];
}

const lineErrorScore = (line: string) => {
  const [failedChar] = incorrectCharInLine(line);

  return errorScoreForChar(failedChar);
}

const lineCompletionScore = (line: string) => {
  const [failedChar, pendingClose] = incorrectCharInLine(line);

  return failedChar === undefined
    ? pendingClose.reverse().reduce((score, char) => score * 5 + completionScoreForChar(char), 0)
    : 0;
};

// Solutions
export const part1 = (lines: string[]): number => {
	return lines
    .reduce((totalScore, line) => {
	  return totalScore + lineErrorScore(line);
  }, 0);
}

export const part2 = (lines: string[]): number => {
  const lineScores = lines
    .map((line) => lineCompletionScore(line))
    .filter((value) => value !== 0)
    .sort((a,b) => a - b);

  return lineScores[Math.floor(lineScores.length / 2)];
}