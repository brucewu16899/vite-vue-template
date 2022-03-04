import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import eslint from '@nabla/vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)

  return {
    plugins: [
      createHtmlPlugin({
        inject: {
          data: {
            ...env,
          },
        },
        minify: true,
      }),
      vue({
        reactivityTransform: true,
      }),
      eslint({
        shouldLint: (path) => /\/.*\.([jt]sx?|vue)$/.test(path),
        eslintOptions: {
          fix: true,
        },
      }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        dts: 'src/auto-imports.d.ts',
      }),
      Components({
        dts: 'src/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  }
})
