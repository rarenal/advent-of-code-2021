import {readInput} from "../file-utils.js";

// Common
const inputArray = readInput('day1.txt')
					.map(Number);

// Solutions
const part1 = (inputArray) => {
	let increasedCount = 0;

	inputArray.reduce((prevNumber, currentNumber) => {
		if (currentNumber > prevNumber) increasedCount++;
		return currentNumber;
	});

	return increasedCount;
}

const part2 = (inputArray) => {
	let increasedCount = 0;

	const windowsArray =
		inputArray
			.map((value, index, array) => {
				if (array[index + 1] === undefined || array[index + 2] === undefined) {
					return null;
				}

				return value + array[index + 1] + array[index + 2];
			} )
			.filter((value) => value !== null);

	windowsArray
		.reduce((prev, current) => {
			if (current > prev) increasedCount++;
			return current;
		});

	return increasedCount;
}

console.log('Solution 1: ',part1(inputArray));
console.log('Solution 2: ',part2(inputArray));