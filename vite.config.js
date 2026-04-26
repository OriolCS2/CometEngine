import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for assets
  build: {
    outDir: 'build',
    emptyOutDir: true,
  }
});
