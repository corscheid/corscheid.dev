import SocialIcon from './SocialIcon'

export default function FooterIconLink({
  href,
  title
}: {
  title: string
  href: string
}) {
  return (
    <a
      className="my-0 mx-[0.5vw] no-underline text-inherit hover:border-b-0 hover:text-[var(--nc-ac-1)]"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={title}
    >
      <SocialIcon name={title} />
    </a>
  )
}
