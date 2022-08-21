import { browser } from '$app/env';
export const asyncForEach = async (array: any[], callback: any) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};
// to capitalize first letter of each word in a string
export const capitalize = (str: string) => {
	return str.replace(/\w\S*/g, (txt: string) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
export const slugFromPath = (path: any) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
// get alpabats by index
export const getAlphabets = (index: number) => {
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return alphabets.charAt(index);
};
// remove string 1st character
export const removeFirstCharacter = (str: string) => str.slice(1);
// is user fully scrolled down while reading a page
export const isUserFullyScrolled = () => {
	if (browser) {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		return scrollTop + clientHeight >= scrollHeight;
	}
};
// parse string to human readable text (e.g. 'hello-world' to 'Hello World')
export const parseString = (str: string) => {
	// remove string special characters
	str = str.replace(/[^\w\s]/gi, ' ');
	return str;
};

// throttle function
export const throttle = (func: any, wait: number) => {
	let timeout: any;
	return function (...args: any) {
		const context = this;
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null;
				func.apply(context, args);
			}, wait);
		}
	};
};
