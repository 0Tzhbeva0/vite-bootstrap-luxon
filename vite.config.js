import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // For GitHub Pages the app is served from /<repo>/
  // In dev we keep it at '/'
  base: command === 'serve' ? '/' : '/vite-bootstrap-luxon/',
}));
