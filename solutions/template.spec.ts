import { part1, part2, getInput } from './dayX';

const testInput = null;

describe('Day X', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(0);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(0);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
