import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Set in docker-compose.dev.yml: file events don't cross bind mounts on Windows/macOS.
    watch: process.env.VITE_USE_POLLING ? { usePolling: true, interval: 200 } : undefined,
  },
})
