import {readInput} from "../file-utils";

// Common
const getInput = () => readInput('day1.txt')
					.map(Number);

// Solutions
export const part1 = (inputArray: number[]): number => {
	let increasedCount = 0;

	inputArray.reduce((prevNumber, currentNumber) => {
		if (currentNumber > prevNumber) increasedCount++;
		return currentNumber;
	});

	return increasedCount;
}

export const part2 = (inputArray: number[]): number => {
	let increasedCount = 0;

	const windowsArray: number[] =
		inputArray
			.map((value, index, array) => {
				if (array[index + 1] === undefined || array[index + 2] === undefined) {
					return null;
				}

				return value + array[index + 1] + array[index + 2];
			} )
			.filter((value) => value !== null) as number[];

	windowsArray
		.reduce((prev, current) => {
			if (current > prev) increasedCount++;
			return current;
		});

	return increasedCount;
}

console.log('Solution 1: ',part1(getInput()));
console.log('Solution 2: ',part2(getInput()));