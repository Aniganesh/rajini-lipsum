import { ExtensionContext, commands, window, SnippetString } from 'vscode';
import { LineTypes } from './@types';
import getLines from './getLines';
import { getInput } from './Helpers/getInput';

export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('rajini-lipsum.test', () => {
		window.showInformationMessage('Thalaiva!');
	}));
	context.subscriptions.push( commands.registerCommand('rajini-lipsum.lines', async () => {
		const activeEditor = window.activeTextEditor;
		if (!activeEditor) { return; }
		const numLines = await getInput('Enter number of lines');
		activeEditor.insertSnippet(new SnippetString(getLines(Number.parseInt(numLines || ''), LineTypes.punch))); 
	}));
}

export function deactivate() { }
