import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(), // Add SVGR plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map '@' to 'src' directory
    },
  },
});
