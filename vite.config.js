import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Absolute asset paths so nested routes (/tutorials/x) load assets from root
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
});
