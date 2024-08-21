import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'

type Bindings = {
  MEMOS: KVNamespace
  CORS_ORIGIN: string
  EXPIRE_DAYS: string
  TG_BOT_TOKEN: string
  TG_USER_ID: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(renderer)
app.use('*', async (c, next) => {
  const corsMiddleware = cors({ origin: c.env.CORS_ORIGIN })
  return corsMiddleware(c, next)
})

app.get('/', (c) => {
  return c.render(
    <memo-feeds memo-url="http://localhost:5173"></memo-feeds>
  )
})

app.get('/memos', async (c) => {
  const memos = await c.env.MEMOS.list().then(async ({ keys }) => {
    return Promise.all(
      keys.map(async (key) => {
        return c.env.MEMOS.get(key.name, { type: 'json' })
      })
    )
  })
  return c.json(memos)
})

app.delete('/memos/delete', async (c) => {
  try {
    const { token } = await c.req.json()
    if (token !== c.env.TG_BOT_TOKEN) {
      throw new Error('Forbiden: Invalid token')
    }
  } catch (e) {
    c.status(403)
    return c.json({ message: 'Forbiden: Invalid token'})
  }

  await c.env.MEMOS.list().then(async ({ keys }) => {
    return Promise.all(
      keys.map(async (key) => {
        return c.env.MEMOS.delete(key.name)
      })
    )
  })
  return c.json({ message: 'All memos deleted' })
})

const createReplyMessage = (chatId: number, messageId: number) => {
  return (message: string) => ({
    method: 'sendMessage',
    chat_id: chatId,
    text: message,
    reply_to_message_id: messageId,
    disable_notification: true,
  })
}
app.post('/telegram/webhook/:token', async (c) => {
  const token = c.req.param('token')
  if (token !== c.env.TG_BOT_TOKEN) {
    c.status(403)
    return c.json({ message: 'Forbiden: Invalid token'})
  }

  const { message } = await c.req.json()
  if (!message) return c.json({ message: 'No message' })

  const replyMessage = createReplyMessage(message.chat.id, message.message_id)
  if (message.from.id.toString() !== c.env.TG_USER_ID) {
    return c.json(replyMessage('Invalid user. This is a private bot.'))
  }
  const memo = {
    id: message.message_id,  // Unique message identifier
    date: message.date,  // Unix time, integer, always positive
    from: { id: message.from.id, username: message.from.username },
    text: message.text || message.caption || '',
    photos: Array.from(message.photo.reduce((map: any, file: any) => {
      const fid = file.file_id.split('_')[0]
      if (!map.has(fid)) {
        map.set(fid, file)
      } else {
        if (map.get(fid).file_size < file.file_size) {
          map.set(fid, file)
        }
      }
      return map
    }, new Map()).values()) || [],
  }
  console.log(memo)
  const expiration = 60 * 60 * 24 * parseInt(c.env.EXPIRE_DAYS)
  const memoKey = message.message_id.toString()
  await c.env.MEMOS.put(memoKey, JSON.stringify(memo), { expirationTtl: expiration })
  return c.json(replyMessage('Success'))
})

app.get('/telegram/file/:file_id', async (c) => {
  const { file_id } = c.req.param()
  const tgUrl = "https://api.telegram.org"
  const token = c.env.TG_BOT_TOKEN
  return fetch(`${tgUrl}/bot${token}/getFile?file_id=${file_id}`)
    .then(r => r.json())
    // .then(s => { console.log(s); return s })
    .then(f => fetch(`${tgUrl}/file/bot${token}/${f.result.file_path}`))
})

export default app
