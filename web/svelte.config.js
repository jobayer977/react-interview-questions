import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
export default config;
