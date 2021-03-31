// Code from https://github.com/styfle/styfle.dev adapted with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/pages/blog/index.tsx
import marked from 'marked'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { BlogPost } from '../../interfaces/blog-post'
import { BLOG } from '../../lib/constants'
import { formatDate } from '../../lib/date'
import { getPosts } from '../../lib/posts'

interface Props {
  posts: BlogPost[]
}

export async function getStaticProps() {
  const posts = await getPosts()
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date))
  return { props: { posts: sortedPosts } }
}

export default function Blog({ posts }: Props) {
  return (
    <Layout title={BLOG}>
      <h1>{BLOG}</h1>
      {posts.map(({ slug, title, date, cover_image, cover_alt, content }) => (
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
          />
          <div
            className="post-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: marked(content.split('\n')[2]) }}
          ></div>
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a>Read more &rarr;</a>
          </Link>
          <hr />
        </article>
      ))}
    </Layout>
  )
}
