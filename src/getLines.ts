import { LineTypes } from "./@types";
import rajiniFunnyLines from "./Constants/funnyLines";
import rajiniPunchLines from "./Constants/punchLines";
const lines = {
	[LineTypes.punch]: rajiniPunchLines,
	[LineTypes.funny]: rajiniFunnyLines
};


const getLines = (numLines?: number, type?: LineTypes) => {
	if (!numLines || typeof numLines !== 'number') {
		numLines = 1;
	}
	if (!type) { type = LineTypes.punch; }
	if(type !== LineTypes.punch && type !== LineTypes.funny || !lines[type]?.length){
		throw Error('Requested type of line not found');
	}
	const start = Math.floor(Math.random() * rajiniPunchLines.length);
	let resLines = lines[type].slice(start, start + numLines).sort(()=> Math.random() - 0.5); // Get a set of lines and randomize.
	while (resLines.length < numLines) {
		resLines = resLines.concat(lines[type].slice(0)); // Not randomizing since this could slow down the extension on large numbers.
	}
	return resLines.join('\n');
};

export default getLines;