// Code from https://github.com/styfle/styfle.dev used with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/utils/markdown.ts
import marked from 'marked'

export function markdownToHtml(md: string, baseUrl?: string) {
  const html = marked(md, {
    baseUrl
  })
  return html
}
