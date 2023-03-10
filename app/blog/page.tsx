import { getPosts } from '@/lib/posts'
import Blog from '@/components/Blog'

export default async function Page() {
  const posts = await getPosts()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return <Blog posts={posts} />
}
