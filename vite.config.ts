import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint ./**/*.{json,js,jsx,ts,tsx,vue}',
      },
    }),
  ],
})
