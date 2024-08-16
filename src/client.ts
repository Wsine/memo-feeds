import { LitElement, unsafeCSS, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

import style from "./tailwind.global.css?inline"

@customElement("memo-feeds")
export class MemoFeeds extends LitElement {
  static styles = css`${unsafeCSS(style)}`

  @property()
  name?: string = "World"

  render() {
    return html`
<!-- Component: User feed -->
<ul aria-label="User feed" role="feed" class="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 ">
  <li role="article" class="relative pl-8 ">
    <div class="flex flex-col flex-1 gap-4">
      <a href="#" class="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white">
        <img src="https://i.pravatar.cc/48?img=1" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
      </a>
      <h4 class="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700">
        <span class="flex-1">Mary Jane</span>
        <span class="text-sm font-normal text-slate-400"> 3 hours ago</span>
      </h4>
      <p class=" text-slate-500">We just released windUI v1.5, which includes a brand new component. An activity feed is a chronological record of system events or user actions. Have a look at the feed page and let me know what you think. Feedback is highly appreciated. </p>
    </div>
  </li>
</ul>
<!-- End User feed -->
    `
  }
}
