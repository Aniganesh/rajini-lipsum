import { window } from "vscode";

export async function getInput() {
	const result = await window.showInputBox({
		// value: 'word',
		// valueSelection: [2, 4],
		placeHolder: 'Enter number of words',
		// validateInput: text => {
		// 	return text;
		// }
	});
	return result;
}