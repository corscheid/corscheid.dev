import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      {' / '}
      <a>Blog</a>
      {' / '}
      <a>Projects</a>
      {' / '}
      <a>Contact</a>
    </nav>
  )
}