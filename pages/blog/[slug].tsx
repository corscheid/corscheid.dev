// Code from https://github.com/styfle/styfle.dev adapted with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/pages/blog/%5Bslug%5D.tsx
import hljs from 'highlight.js'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import typescript from 'highlight.js/lib/languages/typescript'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../../components/Layout'
import { formatDate } from '../../lib/date'
import { markdownToHtml } from '../../lib/markdown'
import { getPosts } from '../../lib/posts'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('shell', shell)

interface PostProps {
  slug: string
  title: string
  date: string
  html: string
}

interface Params {
  params: { slug: string }
}

export const getStaticPaths = async () => ({
  paths: (await getPosts()).map((p: { slug: string }) => `/blog/${p.slug}`),
  fallback: false
})

export async function getStaticProps({ params }: Params): Promise<{ props: PostProps }> {
  const { slug } = params
  const post = (await getPosts()).find(p => p.slug === slug)
  if (!post) {
    throw new Error(`Expected slug ${slug}`)
  }
  const { title, date, content } = post
  const html = markdownToHtml(content)
  return {
    props: { slug, title, date, html }
  }
}

export default function Post(props: PostProps) {
  const { slug, title, date, html } = props
  useEffect(() => { hljs.initHighlighting() }, [])
  return (
    <Layout title={title}>
      <article>
        <style jsx>{`
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
        <Link href="/blog">
          <a>&larr; Back to blog</a>
        </Link>
      </article>
    </Layout>
  )
}
