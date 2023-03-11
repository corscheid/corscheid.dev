import {
  DEV_URL,
  DOMAIN,
  FACEBOOK_URL,
  GITHUB_URL,
  KEYBASE_URL,
  LINKEDIN_URL,
  REPO_URL,
  TWITTER_URL
} from '../utils/constants'

import FooterIconLink from './FooterIconLink'

export default function Footer() {
  const links = [
    { title: 'dev', href: DEV_URL },
    { title: 'keybase', href: KEYBASE_URL },
    { title: 'twitter', href: TWITTER_URL },
    { title: 'github', href: GITHUB_URL },
    { title: 'linkedin', href: LINKEDIN_URL },
    { title: 'facebook', href: FACEBOOK_URL }
  ]
  return (
    <footer className="bg-[var(--nc-bg-2)] border-t border-[var(--nc-bg-3)] py-8 px-6 mt-8 mb-0 mx-[calc(0px-(50vw-50%))] pl-[calc(50vw-50%)] pr-[calc(50vw-50%)]">
      <div className="flex flex-row items-center justify-center mt-4 mx-0 mb-8">
        {links.map((link, idx) => (
          <FooterIconLink title={link.title} href={link.href} key={idx} />
        ))}
      </div>
      <div className="flex flex-row item-center justify-center">
        <a
          className="my-0 mx-[0.5vw] no-underline text-inherit hover:border-b-0 hover:text-[var(--nc-ac-1)]"
          href={REPO_URL}
        >
          {DOMAIN}
        </a>
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
