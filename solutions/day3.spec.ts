import { part1, part2 } from './day3';

const testInput = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

it('should solve test input for day 3 part 1', () => {
  expect(part1(testInput)).toEqual(198);
});

it('should solve test input for day 3 part 2', () => {
  expect(part2(testInput)).toEqual(230);
});