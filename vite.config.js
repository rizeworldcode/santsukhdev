import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite configuration - Sant Sukhdev Hospital
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-store'
    },
    watch: {
      ignored: ['**/*.mp4', '**/public/**']
    }
  }
})
