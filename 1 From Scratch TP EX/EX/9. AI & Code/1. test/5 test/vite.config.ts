import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'ES2020',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          services: ['./src/services/index.ts'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
