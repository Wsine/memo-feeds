#!/usr/bin/env zx

import { faker } from '@faker-js/faker'

require('dotenv').config({ path: ['.env.local'] })

const baseUrl = 'http://localhost:5173'
// refer: https://core.telegram.org/constructor/message
const payload = {
  message: {
    message_id: faker.number.int(),
    from: {
      id: 123456789,
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
    date: Date.now(),
    text: faker.lorem.sentence({ min: 3, max: 15 })
  }
}

await fetch(`${baseUrl}/telegram/webhook/${process.env.TG_BOT_TOKEN}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(res => res.json()).then(console.log)
