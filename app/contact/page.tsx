import {
  CONTACT,
  DOMAIN,
  EMAIL_URL,
  KEYBASE_URL,
  LINKEDIN_URL,
  TWITTER_URL
} from '@/utils/constants'

export const metadata = {
  title: 'Contact',
  description: `Contact | ${DOMAIN}`
}

export default function Page() {
  return (
    <>
      <h1>{CONTACT}</h1>

      <p>Let&apos;s get in touch! Here&apos;s how you can reach me:</p>

      <ul style={{ listStyleType: 'initial' }}>
        <li>
          Twitter: <a href={TWITTER_URL}>@corscheid</a>
        </li>
        <li>
          LinkedIn: <a href={LINKEDIN_URL}>corscheid</a>
        </li>
        <li>
          Keybase: <a href={KEYBASE_URL}>corscheid</a>
        </li>
        <li>
          Email: <a href={EMAIL_URL}>corscheid@gmail.com</a>
        </li>
      </ul>
    </>
  )
}
