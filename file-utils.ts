import {readFileSync} from "fs";

export const readInput = (fileName: string): string[] => {
	return readFileSync(`../data/${fileName}`, 'utf8')
		.split("\n")
		.filter((item) => !!item); // remove extra line breaks
}

export const readRawInput = (fileName: string): string => {
  return readFileSync(`../data/${fileName}`, 'utf8')
}