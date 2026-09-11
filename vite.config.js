import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // SOSTITUZIONE CORRETTA: sostituisce l'import problematico con il nostro modulo vuoto
      'react-native-web/dist/apis/StyleSheet/registry': resolve(__dirname, './src/empty-module.js')
    }
  }
})
