import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: 'demo', // این خط را اضافه کنید
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyVueComponent',
      fileName: (format) => `my-vue-component.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
