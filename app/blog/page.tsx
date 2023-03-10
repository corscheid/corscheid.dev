import Blog from '@/components/Blog'
import { DOMAIN } from '@/lib/constants'
import { getPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog',
  description: `Blog | ${DOMAIN}`
}

export default async function Page() {
  const posts = await getPosts()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return <Blog posts={posts} />
}
