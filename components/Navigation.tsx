'use client'

import { BLOG, CONTACT, HOME, PROJECTS } from '../utils/constants'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navigation() {
  const pathname = usePathname()
  const links = [
    { name: HOME, dest: '/' },
    { name: BLOG, dest: '/blog' },
    { name: PROJECTS, dest: '/projects' },
    { name: CONTACT, dest: '/contact' }
  ]

  const isActive = (name: string, dest: string) =>
    pathname === dest || (name === BLOG && pathname?.includes(dest))

  return (
    <nav className="flex flex-row flex-wrap leading-[3rem] justify-center items-center sm:justify-start">
      {links.map(({ name, dest }) => (
        <div key={name}>
          <Link
            href={dest}
            className={
              isActive(name, dest)
                ? 'font-bold border-b-2 border-[var(--nc-lk-1)] border-solid text-lg hover:no-underline'
                : 'text-lg hover:border-b-2 hover:border-[var(--nc-lk-1)] hover:border-solid'
            }
          >
            {name}
          </Link>
          <span className="p-2">|</span>
        </div>
      ))}
      <ThemeSwitcher />
    </nav>
  )
}
