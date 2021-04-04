import { ThemeContext } from '../lib/theme-context'

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ icon, toggle }) => (
        <>
          <style jsx global>{`
            #theme-toggle {
              width: 4.5em;
              color: var(--nc-lk-1);
              cursor: pointer;
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              -o-user-select: none;
              user-select: none;
            }
            #theme-toggle i {
              padding: 0.25em;
              padding-left: 0;
            }
          `}</style>
          <div id="theme-toggle" onClick={toggle}>
            <i className={icon}></i>
            Theme
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  )
}
