import { existsSync, lstatSync, readFileSync, readdirSync } from 'fs';

import metadataParser from 'markdown-yaml-metadata-parser';
import path from 'path';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	const contents: any = {};
	let total = 0;
	const fromDir = (startPath: string, filter: string, callback: any) => {
		if (!existsSync(startPath)) {
			console.log('no dir ', startPath);
			return;
		}
		const files = readdirSync(startPath);
		for (let i = 0; i < files.length; i++) {
			const filename = path.join(startPath, files[i]);
			const stat = lstatSync(filename);
			if (stat.isDirectory()) {
				fromDir(filename, filter, (res: any) => {
					callback?.(res);
				}); //recurse
			} else if (filename.endsWith(filter)) {
				callback?.(filename);
			}
		}
	};
	fromDir(`./src/routes/${'bn'}/`, '.md', (filename: any) => {
		const res = filename.split('/');
		const currentLanguage = res[2];
		const currentSectionName = res[3];
		const currentFileName = res[4];
		const fileContentString = readFileSync(filename, 'utf8');
		const result = metadataParser(fileContentString)?.metadata;
		const payload = {
			section: currentSectionName,
			name: currentFileName,
			meta: result,
			language: currentLanguage
		};
		contents[currentSectionName] = [...(contents[currentSectionName] || []), payload];
	});
	total = Object.keys(contents).reduce((acc, curr) => {
		return acc + contents[curr].length;
	}, 0);
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			payload: Object.keys(contents).length ? contents : null,
			total: total
		}
	};
}
