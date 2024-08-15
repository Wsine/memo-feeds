import { LitElement, unsafeCSS, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

import style from "./tailwind.global.css?inline"

@customElement("test-component")
export class TestComponent extends LitElement {
  static styles = css`${unsafeCSS(style)}`
  // static styles = css`
  //   @tailwind base;
  //   @tailwind components;
  //   @tailwind utilities;
  // `

  @property()
  name?: string = "World"

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `
  }
}
