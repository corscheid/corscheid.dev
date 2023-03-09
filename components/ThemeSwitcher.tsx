import { ThemeContext } from '../lib/theme-context'

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ icon, toggle }) => (
        <>
          <style>{`
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
              padding-right: 0.25em;
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
