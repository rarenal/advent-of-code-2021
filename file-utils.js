import {readFileSync} from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readInput = (fileName) => {
	return readFileSync(path.join(__dirname, `/data/${fileName}`), 'utf8')
		.split("\n")
		.filter((item) => !!item); // remove extra line breaks
}