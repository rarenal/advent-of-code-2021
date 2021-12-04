import { sumArrayValues, transpose } from '../array-utils';
import { readRawInput } from '../file-utils';

// Common
const getRawInput = () => readRawInput('day4.txt')

export const getBingoInput = (rawInput: string): [number[], number[][][]] => {
  const lines: string[] = rawInput.split('\n');
  const drawnNumbers = lines.shift().split(',').map(Number);
  const newLines = lines.filter((value) => !!value);

  const size = 5;
  const boardsStrings: string[][] = []

  for (let i=0; i < newLines.length; i+=size) {
    boardsStrings.push(newLines.slice(i,i+size));
  }

  const boards = boardsStrings.map((boardStrings) => {
    return boardStrings.map((numbersStr) => numbersStr.split(' ').filter((value) => value !== '').map(Number));
  })

  return [drawnNumbers, boards];
};

const removeNumberFromBoards = (drawnNumber: number, boards: number[][][]) =>
  boards.map((board) =>
    board.map((row) => {
      const updatedRow = [...row];
      const index = row.findIndex((number) => number === drawnNumber);

      if (index !== -1) {
        updatedRow[index] = null;
      }

      return updatedRow;
    })
  );

const findIndexWinnerBoard = (boards: number[][][]): number =>
  boards.findIndex((board) =>
    board.some((row) => row.every((value) => value === null))
    || transpose(board).some((row => row.every((value) => value === null)))
  );

const sumMatrixValues = (board: number[][]): number =>
  board.reduce((sum, value) => sumArrayValues(value) + sum, 0);

const filterWinnerBoards = <T>(boards: T[][][]): T[][][] => {
  return boards.filter((board) =>
    !board.some((row) => row.every((value) => value === null))
    && !transpose(board).some((row) => row.every((value) => value === null))
  );
}

// Solutions
export const part1 = ([drawnNumbers, boards]: [number[], number[][][]] ): number => {
  let updatedBoards = [...boards];
  let lastNumberDrawn: number;
  let leftNumbersSum: number;

  drawnNumbers.some((value) => {
    updatedBoards = removeNumberFromBoards(value, updatedBoards);
    const winnerBoardIndex = findIndexWinnerBoard(updatedBoards);

    if (winnerBoardIndex !== -1) {
      const winnerBoard = updatedBoards[winnerBoardIndex];
      lastNumberDrawn = value;
      leftNumbersSum = sumMatrixValues(winnerBoard);
      return true;
    }

    return false;
  });

  return lastNumberDrawn * leftNumbersSum;
}

export const part2 = ([drawnNumbers, boards]: [number[], number[][][]]): number => {
  let updatedBoards = [...boards];
  let lastNumberDrawn: number;
  let leftNumbersSum: number;

  drawnNumbers.some((value) => {
    updatedBoards = removeNumberFromBoards(value, updatedBoards);
    const winnerBoardIndex = findIndexWinnerBoard(updatedBoards);

    if (winnerBoardIndex !== -1) {
      if (updatedBoards.length === 1) {
        lastNumberDrawn = value;
        leftNumbersSum = sumMatrixValues(updatedBoards[winnerBoardIndex]);

        return true;
      }

      updatedBoards = filterWinnerBoards(updatedBoards);
    }

    return false;
  });

  return lastNumberDrawn * leftNumbersSum;
}

console.log('Solution 1: ', part1(getBingoInput(getRawInput())));
console.log('Solution 2: ', part2(getBingoInput(getRawInput())));