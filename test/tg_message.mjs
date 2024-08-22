#!/usr/bin/env zx

import { faker } from '@faker-js/faker'

require('dotenv').config({ path: ['.dev.vars'] })

const baseUrl = 'http://localhost:8787'
// refer: https://core.telegram.org/constructor/message
const payload = {
  message: {
    message_id: faker.number.int(),
    from: {
      id: 859788224,
      is_bot: false,
      first_name: faker.person.firstName(),
      username: faker.internet.userName(),
      language_code: 'zh-hans'
    },
    chat: {
      id: 123456789,
      first_name: faker.person.firstName(),
      username: faker.internet.userName(),
      type: 'private'
    },
    date: Math.floor(Date.now() / 1000),
    text: faker.lorem.sentence({ min: 3, max: 15 })
  }
}

await fetch(`${baseUrl}/telegram/webhook/${process.env.TG_BOT_TOKEN}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(res => res.json()).then(console.log)
