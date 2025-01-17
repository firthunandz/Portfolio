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
          'sapphire': 
            { DEFAULT: '#0353a4', 100: '#011121', 200: '#012242', 300: '#023263', 400: '#034384', 500: '#0353a4', 600: '#0576e8', 700: '#3698fb', 800: '#79bbfc', 900: '#bcddfe' },
          'yale_blue': 
            { DEFAULT: '#023e7d', 100: '#000c19', 200: '#011932', 300: '#01254b', 400: '#023164', 500: '#023e7d', 600: '#0363c9', 700: '#1d89fc', 800: '#68b0fd', 900: '#b4d8fe' },
          'oxford_blue-light': 
            { DEFAULT: '#002855', 100: '#000811', 200: '#001023', 300: '#001834', 400: '#002045', 500: '#002855', 600: '#0050ab', 700: '#0178ff', 800: '#56a5ff', 900: '#aad2ff' },
          'oxford_blue-medium': 
            { DEFAULT: '#001845', 100: '#00050e', 200: '#000a1d', 300: '#000f2b', 400: '#001439', 500: '#001845', 600: '#00389f', 700: '#0056f7', 800: '#508dff', 900: '#a7c6ff' },
          'oxford_blue-dark': 
            { DEFAULT: '#001233', 100: '#00040a', 200: '#000714', 300: '#000b1f', 400: '#000e29', 500: '#001233', 600: '#00328f', 700: '#0052eb', 800: '#4788ff', 900: '#a3c3ff' },
          'delft_blue': 
            { DEFAULT: '#33415c', 100: '#0a0d12', 200: '#141a25', 300: '#1e2737', 400: '#29344a', 500: '#33415c', 600: '#4d628b', 700: '#7186b1', 800: '#a0aecb', 900: '#d0d7e5' },
          'paynes_gray': 
            { DEFAULT: '#5c677d', 100: '#131519', 200: '#252a32', 300: '#383f4c', 400: '#4b5365', 500: '#5c677d', 600: '#79859c', 700: '#9ba3b5', 800: '#bcc2ce', 900: '#dee0e6' },
          'slate_gray': 
            { DEFAULT: '#7d8597', 100: '#191a1f', 200: '#31353d', 300: '#4a4f5c', 400: '#62697a', 500: '#7d8597', 600: '#979dab', 700: '#b1b6c0', 800: '#cbced5', 900: '#e5e7ea' },
          'cool_gray': 
            { DEFAULT: '#979dac', 100: '#1d1f24', 200: '#393d47', 300: '#565c6b', 400: '#737a8e', 500: '#979dac', 600: '#abb0bc', 700: '#c0c4cd', 800: '#d5d7dd', 900: '#eaebee' },
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
