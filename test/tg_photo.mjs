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
    photo: [
      {
        file_id: 'AgACAgUAAxkBAAMLZsMjBLVKCYgrkusRIHPBx6V1iPQAAmbEMRvlRRhWvjxFF1C7_DYBAAMCAANzAAM1BA',
        file_unique_id: 'AQADZsQxG-VFGFZ4',
        file_size: 2097,
        width: 72,
        height: 90
      },
      {
        file_id: 'AgACAgUAAxkBAAMLZsMjBLVKCYgrkusRIHPBx6V1iPQAAmbEMRvlRRhWvjxFF1C7_DYBAAMCAANtAAM1BA',
        file_unique_id: 'AQADZsQxG-VFGFZy',
        file_size: 42298,
        width: 256,
        height: 320
      },
      {
        file_id: 'AgACAgUAAxkBAAMLZsMjBLVKCYgrkusRIHPBx6V1iPQAAmbEMRvlRRhWvjxFF1C7_DYBAAMCAAN4AAM1BA',
        file_unique_id: 'AQADZsQxG-VFGFZ9',
        file_size: 200742,
        width: 640,
        height: 800
      },
      {
        file_id: 'AgACAgUAAxkBAAMLZsMjBLVKCYgrkusRIHPBx6V1iPQAAmbEMRvlRRhWvjxFF1C7_DYBAAMCAAN5AAM1BA',
        file_unique_id: 'AQADZsQxG-VFGFZ-',
        file_size: 433633,
        width: 1024,
        height: 1280
      },
      {
        file_id: 'AgACAgUAAxkBAAMLZsMjBLVKCYgrkusRIHPBx6V1iPQAAmbEMRvlRRhWvjxFF1C7_DYBAAMCAAN3AAM1BA',
        file_unique_id: 'AQADZsQxG-VFGFZ8',
        file_size: 1033943,
        width: 1920,
        height: 2400
      }
    ],
    caption: faker.lorem.sentence({ min: 3, max: 15 })
  }
}

await fetch(`${baseUrl}/telegram/webhook/${process.env.TG_BOT_TOKEN}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(res => res.json()).then(console.log)
