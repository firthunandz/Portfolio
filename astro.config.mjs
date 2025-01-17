// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const LOCALHOST_URL = 'http://localhost:4321/';
const LIVE_URL = 'https://firthunandz.github.io';

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  base: '/Portfolio/',
  integrations: [tailwind()],
});