# memo-feeds

This is project to construct a timeline with [telegram](https://telegram.org/) and [cloudflare workers](https://developers.cloudflare.com/workers/).

## Technical Stack

- Hono - https://hono.dev/
- Lit - https://lit.dev/
- Vite - https://vitejs.dev/

## Simple Usage

The timeline is constructed as a web component. The usage is extramely simple. Include a js file from CDN and then add a custom html tag `<memo-feeds>`.

```html
<html>
  <head>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="color-scheme" content="light dark" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    />
    <script type='module' src='https://cdn.jsdelivr.net/gh/Wsine/memo-feeds@main/dist/static/memo-feeds.js'></script>
  </head>
  <body>
    <main class="container">
        <memo-feeds memo-url="http://your.zone.workers.dev"></memo-feeds>
    </main>
  </body>
</html>
```

The web component accepts just one parameter `memo-url` which is the service deployed in cloudflare workers.

## Deployment

- Deploy the worker to cloudflare
  - (option 1) Copy the content in `dist/_worker.js` and then paster in Cloudflare Dashboard
  - (option 2) Deploy with `npm run deploy`
    - you may need to change the KV namespace in `wrangler.toml` first
- Configure the following environment variables in Cloudflare Dashboard
  - `CORS_ORIGIN` - `https://your.timeline.domain` - comma is supported for multiple cors
  - `TG_BOT_TOKEN` - the token obtained from @BotFather
  - `TG_BOT_ID` - the user id obtained from @userinfobot
  - (for option 1 only) configure and bind a KV namespace `MEMOS`
- Configure your Telegram Bot
  - set the telegram bot webhook to `http://your.zone.workers.dev/telegram/webhook/<TG_BOT_TOKEN>`

That's it. Congrats and enjoy.


