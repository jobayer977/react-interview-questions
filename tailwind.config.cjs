const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				primary: '#8cc84b',
				secondary: '#09091b',
				darkGray: '#161627',
				light: '#fffffffa;',
			},
			boxShadow: {
				md: '0 1px 2px #0000003d, 0 1px 3px #0000001f',
			},
			fontFamily: {
				sans: ['IBM Plex Sans', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
