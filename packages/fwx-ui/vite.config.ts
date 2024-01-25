import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: { entry: { ui: resolve(__dirname, 'src/ui.ts') }, formats: ['es'] },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [dts()],
})
