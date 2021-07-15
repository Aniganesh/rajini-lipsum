import { window } from "vscode";

export async function getInput(placeHolder: string) {
	const result = await window.showInputBox({
		// value: 'word',
		// valueSelection: [2, 4],
		placeHolder,
		// validateInput: text => {
		// 	return text;
		// }
	});
	return result;
}