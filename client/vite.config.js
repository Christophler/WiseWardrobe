import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

const API_PORT = process.env.EXPRESS_API_PORT || '5000';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":{
        target:`http://localhost:${API_PORT}`,
        changeOrigin: true
      }
    }
  }
})
