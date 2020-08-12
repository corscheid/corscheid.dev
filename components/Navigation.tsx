import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      {' / '}
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      {' / '}
      <a>Projects</a>
      {' / '}
      <a>Contact</a>
    </nav>
  )
}