import *as assert from 'assert';
import { test } from 'mocha';
import rajiniPunchLines from '../../Constants/punchLines';
import getLines from '../../getLines';

suite('Get lines test suite',()=>{
	test('Should get correct length retrieval',()=>{
		const lines = getLines(5, 'punch').split('\n');
		assert.strictEqual(5, lines.length);
	});
	test('Should retrieve from punch lines set', ()=>{
		const lines = getLines(5, 'punch').split('\n');
		let pass = true;
		lines.forEach((line)=>{
			if(!rajiniPunchLines.includes(line)){
				pass = false;
			}
		});
		assert.strictEqual(pass, true);
	});
});