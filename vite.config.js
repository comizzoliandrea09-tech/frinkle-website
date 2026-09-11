import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      external: [
        'react-native-web/dist/apis/StyleSheet/registry'
      ]
    }
  }
})