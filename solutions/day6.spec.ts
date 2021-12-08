import { part1, part2 } from './day6';

const initialInput = [3,4,3,1,2];

it('should solve test input for day 6 part 1', () => {
  expect(part1(initialInput, 18)).toEqual(26);
  expect(part1(initialInput, 80)).toEqual(5934);
});

it('should solve test input for day 6 part 2', () => {
  expect(part2(initialInput, 256)).toEqual(26984457539);
});