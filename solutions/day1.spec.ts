import { part1, part2 } from './day1';

const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

it('should solve test input for day 1 part 1', () => {
	expect(part1(testInput)).toEqual(7);
});

it('should solve test input for day 1 part 2', () => {
	expect(part2(testInput)).toEqual(5);
});