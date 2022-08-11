import fs from 'fs';
import path from 'path';
(async function () {
	const contents = {};
	// Get Directories
	function fromDir(startPath, filter) {
		if (!fs.existsSync(startPath)) {
			console.log('no dir ', startPath);
			return;
		}
		var files = fs.readdirSync(startPath);
		for (var i = 0; i < files.length; i++) {
			var filename = path.join(startPath, files[i]);
			var stat = fs.lstatSync(filename);
			if (stat.isDirectory()) {
				fromDir(filename, filter); //recurse
			} else if (filename.endsWith(filter)) {
				const res = filename.split('/');
				const currentFolderName = res[2];
				const currentFileName = res[3];
				const payload = {
					folderName: currentFolderName,
					fileName: currentFileName,
					url: `/${filename}`
				};
				contents[currentFolderName] = [...(contents[currentFolderName] || []), payload];
			}
		}
		console.log('contents', contents);
	}

	fromDir('./src/', '.md');
	const markdown = Object.entries(contents)
		.map((x) => {
			const [folderName] = x;
			return `- ### [${x[0]}](/src/routes/${folderName})\n   ${x[1]
				.map((y) => `- [${y.fileName}](${y?.url})`)
				.join('\n   ')}\n`;
		})
		.join('');
	fs.writeFileSync('./README.md', ` ## Table of Contents\n\n${markdown}`);
})();
