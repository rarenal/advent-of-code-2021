import { part1, part2 } from './day2';

const testInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

it('should solve test input for day 2 part 1', () => {
	expect(part1(testInput)).toEqual(150);
});

it('should solve test input for day 2 part 2', () => {
	expect(part2(testInput)).toEqual(900);
});