# rajini-lipsum README

The extension  provides dummy text that is a fun replacement to Lorem ipsum. Instead of Lorem ipsum, it provides Rajini's lines from various movies transliterated using latin (English) characters.

## Features

In the current version, this inserts the required number of lines wherever the cursor is currently placed.

## Requirements

This requires vscode 1.58.0 and above

## Extension Settings

The extension provides two commands. 

* `test` command:
  + This command is for checking if the extension has been installed properly. On running this, you should see a VS Code notification with the text 'Thalaiva!'
* `lines` command:
  + This command inserts the required number of lines after a prompt. 

## Known Issues

It could potentially slow down your VSCode instance for extremely large numbers(>1, 00, 000).
For raising issues go to the project's [github page](https://github.com/aniganesh/rajini-lipsum)

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release of Rajini lipsum
You can insert a number of Rajini's iconic punch lines from various movies in your text.

### 0.0.4

Add default keybindings for Rajini lipsum. To get lines added to your editor, press `ctrl+r` ( `cmd+r` ) followed by `ctrl+l` ( `cmd+l` ). The complicated keybinding is chosen in the hope that it won't interfere with your existing keybindings. 0.0.2 and 0.0.3 only contained minor changes with the code.
