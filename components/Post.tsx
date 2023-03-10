import { type PostProps } from '@/interfaces'
import { formatDate } from '@/lib/date'
import Link from 'next/link'

export default function Post(props: PostProps) {
  const { slug, title, date, html } = props

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
        <h1 itemProp="name headline">{title}</h1>
        <p className="article-date">
          <time dateTime={date} itemProp="datePublished">
            {formatDate(date)}
          </time>
        </p>
      </div>

      <div
        className="main-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>

      <a href={`/blog/${slug}`} hidden></a>

      <a href="#__next">&uarr; Up to top</a>
      <br />
      <br />
      <Link href="/blog" legacyBehavior>
        <a>&larr; Back to blog</a>
      </Link>
    </article>
  )
}
