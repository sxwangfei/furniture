// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "exone" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('exone.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from ExOne!');
	});

	// var counter = new WordCounter(vscode);
	// context.subscriptions.push(counter);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

class WordCounter {
	constructor(_vscode) { //构造函数，传入vscode对象
		this.vscode = _vscode;
		this.init();
	}

	init() { //初始化
		var vscode = this.vscode;
		var StatusBarAlignment = vscode.StatusBarAlignment;
		var window = this.vscode.window;

		//statusBar，是需要手动释放的
		this.statusBar = window.createStatusBarItem(StatusBarAlignment.Left);

		//跟注册事件相配合的数组，事件的注册，也是需要释放的
		var disposable = [];
		//事件在注册的时候，会自动填充一个回调的dispose到数组
		window.onDidChangeTextEditorSelection(this.updateText, this, disposable);

		//保存需要释放的资源
		this.disposable = vscode.Disposable.from(disposable);

		this.updateText();
		this.statusBar.show();
	}

	updateText() { //现在快凌晨两点，偷个懒早点睡，临时改成字符数量了。
		var window = this.vscode.window;
		this.editor = window.activeTextEditor;
		var content = this.editor.document.getText();
		var len = content.replace(/[\r\n\s]+/g, '').length;
		this.statusBar.text = `啦啦啦...已经敲了${len}个字符了`;
	}

	dispose() { //实现dispose方法
		this.disposable.dispose();
		this.statusBar.dispose();
	}
}