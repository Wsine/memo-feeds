#!/usr/bin/env zx

require('dotenv').config({ path: ['.dev.vars'] })

const tgUrl = 'https://api.telegram.org'

console.log(argv)
if (argv._.length === 0) {
  console.error('Usage: $0 <tunnel_address>')
  process.exit(1)
}
const tunnel = argv._[0]
console.log(tunnel)

await fetch(`${tgUrl}/bot${process.env.TG_BOT_TOKEN}/setWebhook?url=${tunnel}/telegram/webhook/${process.env.TG_BOT_TOKEN}`, {
  method: 'POST',
}).then(res => res.json()).then(console.log)
