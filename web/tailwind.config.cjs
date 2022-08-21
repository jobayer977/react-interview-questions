const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			colors: {
				theme: '#007dc9',
				backgroundPrimary: '#ffff',
				backgroundSecondary: '#f5f5f5',
				typographyPrimary: '#001e00',
				typographySecondary: '#6c757d'
			},
			boxShadow: {
				md: '0 2px 25px 0 rgb(0 0 0 / 10%)'
			},
			fontFamily: {
				sans: ['IBM Plex Sans', ...fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
