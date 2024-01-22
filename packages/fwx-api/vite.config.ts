import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        api: resolve(__dirname, 'src/api.ts'),
        types: resolve(__dirname, 'src/types.ts'),
      },
      formats: ['es'],
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [dts()],
})
