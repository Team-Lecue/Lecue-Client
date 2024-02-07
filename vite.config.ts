import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    sentryVitePlugin({
      org: 'lecue',
      project: 'javascript-react',
    }),
  ],

  server: {
    hmr: {
      port: 3000,
    },
  },

  build: {
    sourcemap: false,
  },
});
