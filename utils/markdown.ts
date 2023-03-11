import marked from 'marked'

export function markdownToHtml(md: string, baseUrl?: string) {
  const html = marked(md, {
    baseUrl
  })
  return html
}
