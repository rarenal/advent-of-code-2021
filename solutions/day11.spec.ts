import { part1, part2, getInput } from './day11';

const testInput = ['5483143223', '2745854711', '5264556173', '6141336146', '6357385478', '4167524645', '2176841721', '6882881134', '4846848554', '5283751526'];

describe('Day 11', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(1656);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(195);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
