import { formatDate } from '@/lib/date'
import { markdownToHtml } from '@/lib/markdown'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = (await getPosts()).find((p) => p.slug === slug)
  if (!post) {
    notFound()
  }
  const { title, date, content } = post
  const html = markdownToHtml(content)

  return (
    <article>
      <div id="article-header">
        <h1 className="mb-2">{title}</h1>
        <p className="text-base mb-8 text-center">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>

      <div id="main-content" dangerouslySetInnerHTML={{ __html: html }} />

      <a href={`/blog/${slug}`} hidden />

      <a href="#" className="mb-8">
        &uarr; Up to top
      </a>

      <Link href="/blog" legacyBehavior>
        <a>&larr; Back to blog</a>
      </Link>
    </article>
  )
}
