import { part1, part2, getInput } from './day13';

const testInput = ['6,10', '0,14', '9,10', '0,3', '10,4', '4,11', '6,0', '6,12', '4,1', '0,13', '10,12', '3,4', '3,0', '8,4', '1,10', '2,14', '8,10', '9,0'];
const foldInstructions = ['y=7', 'x=5'];

describe('Day 13', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput, foldInstructions.slice(1, 2))).toEqual(17);
  });

  it('should solve part 1', () => {
    const result = part1(...getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });
});
