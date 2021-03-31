import { BLOG } from '../../lib/constants'
import { BlogProps } from '../../interfaces'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { formatDate } from '../../lib/date'
import { getPosts } from '../../lib/posts'
// Code from https://github.com/styfle/styfle.dev adapted with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/pages/blog/index.tsx
import marked from 'marked'

export async function getStaticProps() {
  const posts = await getPosts()
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))
  return { props: { posts: sortedPosts } }
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout title={BLOG}>
      <h1>{BLOG}</h1>
      {posts.map(
        ({ slug, title, date, cover_image, cover_alt, content }, idx) => (
          <article key={slug}>
            <h2>
              <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h2>
            <p className="post-meta">
              <time
                className="dt-published"
                dateTime={date}
                itemProp="datePublished"
              >
                {formatDate(date)}
              </time>
            </p>
            <Image
              src={cover_image}
              alt={cover_alt}
              width={750}
              height={420}
              priority={idx < 5}
            />
            <div
              className="post-content e-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{
                __html: marked(content.split('\n')[3])
              }}
            ></div>
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <a>Read more &rarr;</a>
            </Link>
            <hr />
          </article>
        )
      )}
    </Layout>
  )
}
