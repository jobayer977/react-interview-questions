import adapter from '@sveltejs/adapter-cloudflare'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import relativeImages from 'mdsvex-relative-images'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				alias: { js: 'javascript' },
			},
			layout: './src/layouts/BlogLayout.svelte',
			remarkPlugins: [relativeImages],
		}),
	],
}
export default config
