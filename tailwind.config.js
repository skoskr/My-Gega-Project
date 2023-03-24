/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {

		container: {
			center: true,
			screens: {
				lg: '1140px',
				xl: '1140px',
				'2xl': '1140px',
			},
		},
		
		extend: {
			fontFamily: {
				gemunu: ['Gemunu Libre', 'sans-serif'],
				open: ['Open Sans', 'sans-serif'],
			},

			colors: {
				'pred': '#BC1A45',
				'pmelon': '#FFD369',
				'pgrey': '#DDDDDD',
				'pwhite': '#F7F7F7',
			},

			spacing: {
				128: '32rem',
			},
		},
	},
	plugins: [],
};
