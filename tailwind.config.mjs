/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'border-color': 'hsl(240, 3.7%, 15.9%)',
				'background-color': 'hsl(240 10% 3.9%)',
			  },
			  boxShadow: {
				'blue': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
			  }
		},
	},
	plugins: [],
}
