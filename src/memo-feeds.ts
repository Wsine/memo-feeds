import { LitElement, unsafeCSS, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Task } from "@lit/task"
import RelativeTime from '@yaireo/relative-time'

import style from "./tailwind.global.css?inline"

@customElement("memo-feeds")
export class MemoFeeds extends LitElement {
  static styles = [css`${unsafeCSS(style)}`]

  @property({ type: String, attribute: 'memo-url' })
  memoUrl: string

  private _fetchMemosTask = new Task(this, {
    task: async ([url], {signal}) => {
      return await fetch(`${url}/memos`, {signal}).then(r => r.json())
    },
    args: () => [this.memoUrl],
  })

  render() {
    const relativeTime = new RelativeTime()
    return html`
<!-- Component: User feed -->
<ul aria-label="User feed" role="feed" class="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 ">
  ${this._fetchMemosTask.render({
    pending: () => html`
      <li role="article" class="relative pl-8 ">
        <div class="flex flex-col flex-1 gap-4">
          <p class=" text-slate-500">Fetching data...</p>
        </div>
      </li>
    `,
    complete: (memos: any) => memos.map((memo: any) => html`
      <li role="article" class="relative pl-8 ">
        <div class="flex flex-col flex-1 gap-4">
          <a href="#" class="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white">
            <img src="https://i.pravatar.cc/48?img=1" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
          </a>
          <h4 class="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700">
            <span class="flex-1">${memo.from.username}</span>
            <span class="text-sm font-normal text-slate-400">${relativeTime.from(new Date(memo.date))}</span>
          </h4>
          <p class=" text-slate-500">${memo.text}</p>
          <div class="flex -mx-2" @click=${this._openLightbox}>
            ${memo.photos.map((photo: any) => html`
              <div class="w-1/6 px-2">
                <div class="bg-gray-400">
                  <div class="image-wrapper cursor-zoom-in">
                    <img alt="Placeholder" class="object-fit w-full" src="${this.memoUrl}/telegram/file/${photo.file_id}">
                  </div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </li>
    `)
  })}
</ul>
<!-- End User feed -->
<div id="lightbox" class="lightbox" @click=${this._closeLightbox}></div>
    `
  }

  firstUpdated() {
    this.$lightbox = this.shadowRoot.getElementById('lightbox')
  }

  _openLightbox = (e: Event) => {
    const imageWrapper = e.target.closest('.image-wrapper');
    if (imageWrapper) {
      const image = imageWrapper.querySelector('img');
      if (image) {
        this.$lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
        this.$lightbox.classList.add('show');
      }
    }
  }

  _closeLightbox = (e: Event) => {
    if (!e.target.hasAttribute('src')) {
      this.$lightbox.classList.remove('show');
    }
  }
}
