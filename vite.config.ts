import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr(),
    sentryVitePlugin({
      org: 'lecue',
      project: 'javascript-react',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    compression({ algorithm: 'gzip' }),
  ],

  server: {
    host: true,
    hmr: {
      port: 3000,
    },
  },

  build: {
    sourcemap: false,
  },
});
