#!/usr/bin/env zx

require('dotenv').config({ path: ['.env.local'] })

const baseUrl = 'http://localhost:5173'

if (argv.delete) {
  await fetch(`${baseUrl}/memos/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: process.env.TG_BOT_TOKEN })
  }).then(res => res.json()).then(console.log)
  process.exit(0)
}

await fetch(`${baseUrl}/memos`).then(res => res.json()).then(console.log)
