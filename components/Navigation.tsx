import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavItem {
  name: string
  dest: string
}

const links: NavItem[] = [
  { name: 'Home', dest: '/' },
  { name: 'Blog', dest: '/blog' },
  { name: 'Projects', dest: '/projects' },
  { name: 'Contact', dest: '/contact' }
]

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <style jsx>{`
        .nav-item {
          display: inline;
        }
        .nav-link {
          font-size: 18px;
        }
        .nav-link:hover {
          text-decoration: none;
          border-bottom: 2px solid;
        }
        .active {
          font-weight: bold;
          border-bottom: 2px solid;
        }
      `}</style>
      {links.map(({ name, dest }) => (
        <div className='nav-item' key={name}>
          <Link href={dest}>
            <a className={(pathname === dest || name === 'Blog' && pathname.includes(dest)) ? 'active nav-link' : 'nav-link'}>
              {name}
            </a>
          </Link>
          {name !== 'Contact' ? ' / ' : null}
        </div>
      ))}
    </nav>
  )
}