// Vite Plugins
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// PostCSS
import postcss from './postcss.config';

// Path Util
import { join } from 'path';
const resolve = (...paths) => join(__dirname, ...paths);

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: resolve('src') },
    ],
  },
  css: {
    postcss,
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: 'true; @import "@/assets/styles/global.less";',
        },
      },
    },
  },
  build: {
    target: ['es2015'],
  },
  plugins: [
    vue(),
    eslint({
      cache: false,
      include: ['./src/*/**.js', './src/*/**.vue'],
    }),
  ],
});