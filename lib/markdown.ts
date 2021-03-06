// Code from https://github.com/styfle/styfle.dev used with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/utils/markdown.ts
import { highlight, highlightAuto } from 'highlight.js'

import marked from 'marked'

export function markdownToHtml(md: string, baseUrl?: string) {
  const html = marked(md, {
    baseUrl,
    highlight: (code: string, lang: string) => {
      if (!lang) {
        return highlightAuto(code).value
      }
      return highlight(lang, code).value
    }
  })
  return html
}
