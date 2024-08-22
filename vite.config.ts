import pages from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/memo-feeds.ts',
      output: {
        dir: './dist',
        entryFileNames: 'static/memo-feeds.js'
      }
    }
  },
  plugins: [
    pages(),
  ]
})
