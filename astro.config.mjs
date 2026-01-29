// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://beagleworks.github.io',
  base: '/ccclog/',
  output: 'static',
  trailingSlash: 'always',
});
