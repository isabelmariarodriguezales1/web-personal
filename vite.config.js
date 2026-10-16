import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Include uppercase image extensions as assets so imports like "foto.JPG" work
  assetsInclude: ['**/*.JPG','**/*.JPEG'],
  server: {
    port: 5173
  }
})
