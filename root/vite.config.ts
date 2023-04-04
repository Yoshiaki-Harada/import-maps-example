import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()], 
  server: {
    port: 3000,
    proxy: {
      '/asset': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/asset/, ''),
      },
    }
  },
  build: {
    minify: false,
    target: 'esnext',
  },
});
