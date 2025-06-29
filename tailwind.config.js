/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#0F3144', // Your main green
				secondary: '#269798', // Another degree
				accent: '#2BB574', // Accent green
				graycustom: '#7A7A7A' // Custom gray
			},
			fontFamily: {
				arabic: ['MyArabicFont', 'sans-serif']
			}
		}
	},

	plugins: []
};
