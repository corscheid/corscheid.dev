// Code from https://github.com/styfle/styfle.dev adapted with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/pages/blog/%5Bslug%5D.tsx
import Post from '@/components/Post'
import type { Params, PostProps } from '@/interfaces'
import { markdownToHtml } from '@/lib/markdown'
import { getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export default async function Page({ params }: Params) {
  const { slug } = params
  const post = (await getPosts()).find((p) => p.slug === slug)
  if (!post) {
    notFound()
  }
  const { title, date, content } = post
  const html = markdownToHtml(content)
  const props: PostProps = { slug, title, date, html }

  return <Post {...props} />
}
