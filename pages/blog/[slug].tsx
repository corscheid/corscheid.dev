// Code from https://github.com/styfle/styfle.dev adapted with permission of original author
// Original file: https://github.com/styfle/styfle.dev/blob/main/pages/blog/%5Bslug%5D.tsx
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getPosts } from '../../lib/posts';
import { formatDate } from '../../lib/date';
import { markdownToHtml } from '../../lib/markdown';

interface PostProps {
  slug: string;
  title: string;
  date: string;
  html: string;
}

export const getStaticPaths = async () => ({
  paths: (await getPosts()).map((p: { slug: string; }) => `/blog/${p.slug}`),
  fallback: false,
});

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<{ props: PostProps }> {
  const { slug } = params;

  const post = (await getPosts()).find(p => p.slug === slug);
  if (!post) {
    throw new Error(`Expected slug ${slug}`);
  }
  const { title, date, content } = post;
  const html = markdownToHtml(content);
  return {
    props: { slug, title, date, html },
  };
}

export default function Post(props: PostProps) {
  const { slug, title, date, html } = props;
  return (
    <Layout title={title}>
      <article>
        <style jsx>{`
          .article-header h1 {
            margin-bottom: 8px;
          }
          .article-date {
            fontSize: 1em;
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

        <Link href="/blog">
          <a>&larr; Back to blog</a>
        </Link>
      </article>
    </Layout>
  );
}