// import build from '@hono/vite-cloudflare-pages'
import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client.ts',
          output: {
            dir: './public',
            entryFileNames: 'static/client.js'
          }
        }
      }
    }
  } else {
    return {
      plugins: [
        pages(),
        devServer({
          adapter,
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
