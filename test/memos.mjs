#!/usr/bin/env zx

require('dotenv').config({ path: ['.dev.vars'] })

const baseUrl = 'http://localhost:8787'

if (argv.delete) {
  await fetch(`${baseUrl}/memos/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: process.env.TG_BOT_TOKEN })
  }).then(res => res.json()).then(console.log)
  process.exit(0)
}

await fetch(`${baseUrl}/memos`).then(res => res.json()).then(console.log)
