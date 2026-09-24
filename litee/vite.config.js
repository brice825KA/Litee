import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    ...(mode === 'development' && process.env.VITE_ENABLE_DEVTOOLS === 'true'
      ? [vueDevTools()]
      : []),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate'
        },
        icon: {
          mode: 'svg',
          clientBundle: {
            scan: true
          }
        }
      },
      prefix: 'U'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-router': fileURLToPath(new URL('./node_modules/vue-router/dist/vue-router.mjs', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']
  }
}))