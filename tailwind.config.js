/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				'fira-code': ['"Fira Code"', 'monospace'],
			},
			backgroundImage: {
				main: 'linear-gradient(135deg, rgba(64,171,176,1) 0%, rgba(239,159,188,1) 100%)',
			},
			colors: {
				dark: {
					50: '#f4f3f5',
					100: '#eae7eb',
					200: '#cac4cc',
					300: '#a9a1ae',
					400: '#695a71',
					500: '#291334',
					600: '#25112f',
					700: '#1f0e27',
					800: '#190b1f',
					900: '#140919',
				},
				warning: {
					50: '#fefbf5',
					100: '#fdf7eb',
					200: '#fbebce',
					300: '#f8dfb0',
					400: '#f3c775',
					500: '#eeaf3a',
					600: '#d69e34',
					700: '#b3832c',
					800: '#8f6923',
					900: '#75561c',
				},
				secondary: {
					50: '#fefafc',
					100: '#fdf5f8',
					200: '#fbe7ee',
					300: '#f9d9e4',
					400: '#f4bcd0',
					500: '#ef9fbc',
					600: '#d78fa9',
					700: '#b3778d',
					800: '#8f5f71',
					900: '#754e5c',
				},
				primary: {
					50: '#f7fcfc',
					100: '#f0f9fa',
					200: '#d9f0f1',
					300: '#c1e7e9',
					400: '#93d5d9',
					500: '#65c3c8',
					600: '#5bb0b4',
					700: '#4c9296',
					800: '#3d7578',
					900: '#316062',
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-brand-colors'),
		require('tailwindcss-debug-screens'),
	],
}
