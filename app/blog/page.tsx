import { BLOG, DOMAIN } from '@/lib/constants'
import { formatDate } from '@/lib/date'
import { getPosts } from '@/lib/posts'
import marked from 'marked'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: BLOG,
  description: `${BLOG} | ${DOMAIN}`
}

export default async function Page() {
  const posts = await getPosts()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <h1>{BLOG}</h1>
      {posts.map(
        ({ slug, title, date, cover_image, cover_alt, content }, idx) => (
          <article key={slug}>
            <h2>
              <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                {title}
              </Link>
            </h2>
            <p className="post-meta">
              <time className="dt-published" dateTime={date}>
                {formatDate(date)}
              </time>
            </p>
            <Image
              src={cover_image}
              alt={cover_alt}
              width={750}
              height={420}
              priority={idx < 5}
              loading={idx < 5 ? 'eager' : 'lazy'}
            />
            <div
              className="post-content e-content"
              dangerouslySetInnerHTML={{
                __html: marked(content.split('\n')[3])
              }}
            ></div>
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              Read more &rarr;
            </Link>
            <hr />
          </article>
        )
      )}
    </>
  )
}
