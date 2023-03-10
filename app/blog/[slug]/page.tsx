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
      <style>{`
          .article-header h1 {
            margin-bottom: 8px;
          }
          .article-date {
            fontsize: 1em;
            margin-bottom: 2rem;
            text-align: center;
          }
        `}</style>
      <div className="article-header">
        <h1>{title}</h1>
        <p className="article-date">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>

      <div
        className="main-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>

      <a href={`/blog/${slug}`} hidden></a>

      <a href="#">&uarr; Up to top</a>
      <br />
      <br />
      <Link href="/blog" legacyBehavior>
        <a>&larr; Back to blog</a>
      </Link>
    </article>
  )
}
