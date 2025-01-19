// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const LOCALHOST_URL = 'http://localhost:4321/';
const LIVE_URL = 'https://firthunandz.github.io';

const isDev = import.meta.env?.MODE === 'development';

// https://astro.build/config
export default defineConfig({
  site: isDev ? LOCALHOST_URL : LIVE_URL, // Cambia la URL según el entorno
  base: isDev ? '/' : '/Portfolio/', // Configura la base según el entorno
  integrations: [tailwind()],
});