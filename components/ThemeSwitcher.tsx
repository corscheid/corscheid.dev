import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {

  // TODO: Fix behavior when switching themes between switching pages
  const [theme, setTheme] = useState("")
  const [iconClassName, setIconClassName] = useState("")

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(isDark ? "dark" : "light")
    setIconClassName(isDark ? "fas fa-moon" : "far fa-sun")
  }, [])

  const switchTheme = () => {
    if (theme === "dark") {
      document.documentElement.dataset.theme = "light"
      setTheme("light")
      setIconClassName("far fa-sun")
    } else {
      document.documentElement.dataset.theme = "dark"
      setTheme("dark")
      setIconClassName("fas fa-moon")
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
        [data-theme="light"] {
          --nc-tx-1: #000000;
          --nc-tx-2: #1a1a1a;
          --nc-bg-1: #ffffff;
          --nc-bg-2: #f6f8fa;
          --nc-bg-3: #e5e7eb;
          --nc-lk-1: #0051ad;
          --nc-lk-2: #0366d6;
          --nc-lk-tx: #ffffff;
          --nc-ac-1: #79ffe1;
          --nc-ac-tx: #0c4047;
        }
        [data-theme="dark"] {
            --nc-tx-1: #ffffff;
            --nc-tx-2: #eeeeee;
            --nc-bg-1: #000000;
            --nc-bg-2: #111111;
            --nc-bg-3: #222222;
            --nc-lk-1: #3291ff;
            --nc-lk-2: #0070f3;
            --nc-lk-tx: #ffffff;
            --nc-ac-1: #7928ca;
            --nc-ac-tx: #ffffff;
        }
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