import { part1, part2 } from './day7';

const initialInput = [16,1,2,0,4,2,7,1,2,14];

it('should solve test input for day 7 part 1', () => {
  expect(part1(initialInput)).toEqual(37);
});

it('should solve test input for day 7 part 2', () => {
  expect(part2(initialInput)).toEqual(168);
});