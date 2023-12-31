/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: { primary: 'Poppins' },
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		extend: {
			colors: {
				primary: '#222222',
				secondary: '#F5E6E0',
			},
			backgroundImage: {
				hero: "url('./img/bg_hero.svg')",
			},
		},
	},
	plugins: [],
};
