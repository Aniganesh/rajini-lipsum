// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import getLines from './getLines';
import { getInput } from './Helpers/getInput';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "rajini-lipsum" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let test = vscode.commands.registerCommand('rajini-lipsum.test', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Thalaiva!');
	});
	let words = vscode.commands.registerCommand('rajini-lipsum.lines', async () => {
		const activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) { return; }
		const numLines = await getInput();
		activeEditor.edit((editBuilder) => {
			const pos = activeEditor.selection.active;
			editBuilder.insert(pos, getLines(Number.parseInt(numLines || ''), 'punch'));
		});
	});
	context.subscriptions.push(test);
	context.subscriptions.push(words);
}

// this method is called when your extension is deactivated
export function deactivate() { }
