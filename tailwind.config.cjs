/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			screens: {
				'xs': { 'max': '425px' },
				'mob': { 'max': '768px' },
			},
		},
	},
	plugins: [
		require("daisyui")
	],
	darkMode: 'class',
	daisyui: {
		themes: ["cupcake", "dark", "night","light"],
	},
}