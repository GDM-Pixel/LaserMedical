/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				"1/2": "50%",
			},
			borderRadius: {
				xl: "1rem",
			},
			dropShadow: {
				'3xl': '0 2px 2px rgba(0, 0, 0, 0.5)',
				'4xl': '0 3px 3px rgba(0, 0, 0, 0.5)'
			},

		},
		screens: {
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1400px"
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			grey: {
				100: "#F2F2F2",
				200: "#525252",
				300: "#474747",
				400: "#373737",
				500: "#333333",
				600: "#292929",
				700: "#1E1E1E",
				800: "#141414",
			},
			brown: {
				100: "#E2C3A1",
				200: "#DDB992",
				300: "#D9AF82",
				400: "#D19F6B",
				500: "#CF9B63",
				600: "#CA9153",
				700: "#C58744",
				800: "#BB7D3A",
			},
			

			error: "#903131",
		},
		fontFamily: {
			sans: ["Open Sans, Arial"],
			serif: ["Times New Roman"],
		},
		fontSize: {
			xs: ["14px", "19px"],
			sm: ["16px", "22px"],
			base: ["20px", "27px"],
			md: ["24px", "32px"],
			lg: ["30px", "40px"],
			xl: ["36px", "48px"],
			xxl: ["40px", "54px"],
			xxxl: ["48px", "48px"],
			xxxxl: ["54px", "54px"],
			jumbo: ["60px", "60px"],
		},
		container: {
			center: true,
			padding: "2rem",
		},
	
	},
	plugins: [require("@tailwindcss/typography"),
	function ({ addBase, theme }) {
		addBase({
			'.blogpost h1': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.xxl'),
				fontWeight: theme('fontWeight.bold'),
				lineHeight: theme('lineHeight.tight'),
				marginBottom: theme('margin.4'),
				marginTop: theme('margin.4'),
			},
			'.article-content h2': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.xxxl'),
				fontWeight: theme('fontWeight.bold'),
			},
			'.article-content h3': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.xxl'),
				fontWeight: theme('fontWeight.bold'),
			},
			'.article-content h4': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.xl'),
				fontWeight: theme('fontWeight.bold'),
			},
			'.article-content h5': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.lg'),
				fontWeight: theme('fontWeight.bold'),
			},
			'.article-content h6': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.base'),
				fontWeight: theme('fontWeight.bold'),
			},
			'.article-content p': {
				color: theme('colors.grey.800'),
				fontSize: theme('fontSize.base'),
				fontWeight: theme('fontWeight.normal'),
				marginBottom: theme('margin.3'),
				textAlign: 'justify',
			},
		});
	},
	],
}

