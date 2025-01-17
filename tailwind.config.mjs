/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: 
        { 'dark_purple': '#0B051F',
          'medium_purple': '#221D30',
          'wisteria': '#B4A9D6',
          'electric_indigo': '#5D31E0',
          'russian_violet': '#221547',
          'rose': '#F72585',
          'fandango': '#B5179E',
          'grape': '#7209B7',
          'palatinate_blue': '#3F37C9',
          'neon_blue': '#4361EE',
          'chefchaouen_blue': '#4895EF',
          'vivid_sky_blue': '#4CC9F0',
          'true_blue': '#0466c8', 
          'sapphire': '#0353a4',
          'yale_blue': '#023e7d',
          'oxford_blue-light': '#002855',
          'oxford_blue-medium': '#001845',
          'oxford_blue-dark': '#001233',
          'delft_blue': '#33415c',
          'paynes_gray': '#5c677d',
          'slate_gray': '#7d8597',
          'cool_gray': '#979dac',
		    },
      fontFamily: {
        'rubik': 'rubik',
        'fira-code': 'Fira Code Variable',
        'scp': 'Source Code Pro Variable',
        'inter': 'Inter Variable',
        'cinzel': 'Cinzel Variable',
      },
    },
	plugins: [
    require('tailwind-scrollbar'),
  ],
  },
}
