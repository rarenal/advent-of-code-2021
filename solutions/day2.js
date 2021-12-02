import { readInput } from "../file-utils.js";

// Common
const inputArray = readInput('day2.txt');

const readAction = (action) => {
	const [direction, amount] = action.split(' ');

	return [direction, Number(amount)];
}

// Solutions
const part1 = (inputArray) => {
	const currentPosition = { x: 0, depth: 0 };

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

const part2 = (inputArray) => {
	const currentPosition = { x: 0, depth: 0, aim: 0 };

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