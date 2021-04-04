import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  // TODO: Fix behavior when switching themes between switching pages
  const [theme, setTheme] = useState('')
  const [iconClassName, setIconClassName] = useState('')

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
    setIconClassName(isDark ? 'fas fa-moon' : 'far fa-sun')
  }, [])

  const switchTheme = () => {
    if (theme === 'dark') {
      document.documentElement.dataset.theme = 'light'
      setTheme('light')
      setIconClassName('far fa-sun')
    } else {
      document.documentElement.dataset.theme = 'dark'
      setTheme('dark')
      setIconClassName('fas fa-moon')
    }
  }

  return (
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
      <div id="theme-toggle" onClick={switchTheme}>
        <i className={iconClassName}></i>
        Theme
      </div>
    </>
  )
}
