import pages from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'
import {ViteEjsPlugin} from "vite-plugin-ejs"

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./src/memo-feeds.ts', 'index.html'],
          output: {
            dir: './dist',
            entryFileNames: 'static/[name].js'
          }
        },
      },
      plugins: [
        ViteEjsPlugin(),
      ]
    }
  } else {
    return {
      plugins: [
        pages(),
        ViteEjsPlugin(),
      ]
    }
  }
})
