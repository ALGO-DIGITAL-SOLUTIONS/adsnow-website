import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adsnow.ro',
  trailingSlash: 'never',
  build: { format: 'file' },
});
