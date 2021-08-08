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
	if(type !== LineTypes.punch && type !== LineTypes.funny){
		throw Error('Requested type of line not found');
	}
	const start = Math.floor(Math.random() * rajiniPunchLines.length);
	let resLines = lines[type].slice(start, start + numLines);
	while (resLines.length < numLines) {
		resLines = resLines.concat(lines[type].slice(0));
	}
	return resLines.join('\n');
};

export default getLines;