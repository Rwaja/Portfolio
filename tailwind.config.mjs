/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'border-color': 'hsl(214, 31.8%, 91.4%)',
			  },
		},
	},
	plugins: [],
}
