import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['motion/react'],
          cinema: ['gsap', 'gsap/ScrollTrigger', 'lenis'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
