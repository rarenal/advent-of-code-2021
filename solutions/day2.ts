import { readInput } from "../file-utils";

// Common
interface Position {
  x: number;
  depth: number;
  aim?: number;
}

const inputArray = readInput('day2.txt');

const readAction = (action: string): [string, number] => {
	const [direction, amount] = action.split(' ');

	return [direction, Number(amount)];
}

// Solutions
export const part1 = (inputArray: string[]) => {
	const currentPosition: Position = { x: 0, depth: 0 };

	inputArray.forEach((action) => {
		const [direction, amount] = readAction(action);

		switch (direction) {
			case 'forward': {
				currentPosition.x += amount;
				break;
			}
			case 'up': {
				currentPosition.depth -= amount;
				break;
			}
			case 'down': {
				currentPosition.depth += amount;
				break;
			}
			default: throw "wrong direction";
		}
	});

	return currentPosition.x * currentPosition.depth;
}

export const part2 = (inputArray: string[]) => {
	const currentPosition: Position = { x: 0, depth: 0, aim: 0 };

	inputArray.forEach((action) => {
		const [direction, amount] = readAction(action);

		switch (direction) {
			case 'forward': {
				currentPosition.x += amount;
				currentPosition.depth += currentPosition.aim * amount
				break;
			}
			case 'up': {
				currentPosition.aim -= amount;
				break;
			}
			case 'down': {
				currentPosition.aim += amount;
				break;
			}
			default: throw "wrong direction";
		}
	});

	return currentPosition.x * currentPosition.depth;
}

console.log('Solution 1: ', part1(inputArray));
console.log('Solution 2: ', part2(inputArray));