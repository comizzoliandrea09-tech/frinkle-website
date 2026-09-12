import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-native-web/dist/apis/StyleSheet/registry']
  },
  resolve: {
    alias: {
      'react-native-web/dist/apis/StyleSheet/registry': resolve(__dirname, './src/empty-module.js'),
      'react-native-web': resolve(__dirname, './src/mock-react-native-web.js')
    }
  }
})
