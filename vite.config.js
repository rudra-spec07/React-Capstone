import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // This is the magic line that fixes your error!
    globals: true,
    setupFiles: './src/setupTests.js', // We will create this file in the next step
  }
})