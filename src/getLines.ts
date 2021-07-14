import rajiniPunchLines from "./Constants/punchLines";
const lines = {
	punch: rajiniPunchLines,
	funny: []
};


const getLines = (numLines?: number, type?: 'punch' /* | 'funny' */) => {
	if (!numLines || typeof numLines !== 'number') {
		numLines = 1;
	}
	if (!type) { type = 'punch'; }
	const start = Math.floor(Math.random() * rajiniPunchLines.length);
	let resLines = lines[type].slice(start, start + numLines);
	while (resLines.length < numLines) {
		resLines = resLines.concat(lines[type].slice(0));
	}
	return resLines.join('\n');
};

export default getLines;