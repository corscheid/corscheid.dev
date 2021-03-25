import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer>
      <style jsx>{`
        .flex {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 10em;
        }
        a {
          margin: 0 0.5vw;
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          border-bottom: none;
          color: var(--nc-ac-1);
        }
      `}</style>
      <div className="container">
        <div className="flex">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/corscheid"
              title="dev"
            >
              <SocialIcon name="dev" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://keybase.io/corscheid"
              title="Keybase"
            >
              <SocialIcon name="keybase" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/corscheid"
              title="twitter"
            >
              <SocialIcon name="twitter" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/corscheid"
              title="github"
            >
              <SocialIcon name="github" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/corscheid"
              title="linkedin"
            >
              <SocialIcon name="linkedin" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/corscheid"
              title="facebook"
            >
              <SocialIcon name="facebook" />
            </a>
          </div>
          <div>
            <a href="https://github.com/corscheid/corscheid.dev">
              corscheid.dev
            </a>
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
