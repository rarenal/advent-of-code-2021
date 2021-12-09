import { part1, part2 } from './day9';

const testInput = [[2,1,9,9,9,4,3,2,1,0], [3,9,8,7,8,9,4,9,2,1], [9,8,5,6,7,8,9,8,9,2], [8,7,6,7,8,9,6,7,8,9], [9,8,9,9,9,6,5,6,7,8]];

it('should solve test input for day 9 part 1', () => {
  expect(part1(testInput)).toEqual(15);
});

it('should solve test input for day 9 part 2', () => {
  expect(part2(testInput)).toEqual(1134);
});