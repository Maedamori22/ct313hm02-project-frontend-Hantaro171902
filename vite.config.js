import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  },

  middleware: (customMiddleware) => {
    return [
      (req, res, next) => {
        if (req.url.startsWith('/api')) {
          console.log(`Request to backend: ${req.method} ${req.url}`);
        }
        next();
      },
      customMiddleware
    ];
  }
});
