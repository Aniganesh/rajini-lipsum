import { ExtensionContext, commands, window, SnippetString } from 'vscode';
import { LineTypes } from './@types';
import getLines from './getLines';
import { getInput } from './Helpers/getInput';
import WebViewPanel from './WebView';

export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('rajini-lipsum.test', () => {
		window.showInformationMessage('Thalaiva!');
	}));
	context.subscriptions.push(commands.registerCommand('rajini-lipsum.lines', async () => {
		const activeEditor = window.activeTextEditor;
		if (!activeEditor) {
			window.showInformationMessage('Kanna endha editor um active ah illa. Editor irundha dhan lines kuduka mudiyum (No editor is active. Click on an editor to add lines)');
			 return;
			 }
		const numLines = await getInput('Enter number of lines');
		activeEditor.insertSnippet(new SnippetString(getLines(Number.parseInt(numLines || ''), LineTypes.punch))); 
	}));
	context.subscriptions.push(commands.registerCommand('rajini-lipsum.settings',async ()=>{
		WebViewPanel.createOrShow(context.extensionUri);
	}));
}

export function deactivate() { }
// TODO: configure rollup, react-scripts or something else to build react package on F5