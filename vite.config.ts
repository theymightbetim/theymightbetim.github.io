import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions:{
      input: {
        main: './index.html',
        blog: './blog.html'
      }
    },
    outDir: './build',
    emptyOutDir: true, // also necessary
  }
})
