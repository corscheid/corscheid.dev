'use client'

import marked from 'marked'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { type BlogProps } from '@/interfaces'
import { BLOG } from '@/lib/constants'
import { formatDate } from '@/lib/date'

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <h1>{BLOG}</h1>
      {posts.map(
        ({ slug, title, date, cover_image, cover_alt, content }, idx) => (
          <article key={slug}>
            <h2>
              <Link href="/blog/[slug]" as={`/blog/${slug}`} legacyBehavior>
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
              loading={idx < 5 ? 'eager' : 'lazy'}
            />
            <div
              className="post-content e-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{
                __html: marked(content.split('\n')[3])
              }}
            ></div>
            <Link href="/blog/[slug]" as={`/blog/${slug}`} legacyBehavior>
              <a>Read more &rarr;</a>
            </Link>
            <hr />
          </article>
        )
      )}
    </>
  )
}
