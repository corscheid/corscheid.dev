import '../styles/atom-one-dark.css'
import '../styles/globals.css'

import { useState, useEffect, useRef } from 'react'

import type { AppProps } from 'next/app'
import { ThemeContext } from '../lib/theme-context'

export default function MyApp({ Component, pageProps }: AppProps) {
  const prefersDark = useRef(false)

  const toggleTheme = () => {
    setState((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      const newIcon = state.theme === 'dark' ? 'far fa-sun' : 'fas fa-moon'
      document.documentElement.dataset.theme = newTheme
      return {
        ...state,
        theme: newTheme,
        icon: newIcon
      }
    })
  }

  useEffect(() => {
    prefersDark.current = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    document.documentElement.dataset.theme = prefersDark.current
      ? 'dark'
      : 'light'
    setState({
      theme: prefersDark.current ? 'dark' : 'light',
      icon: prefersDark.current ? 'fas fa-moon' : 'far fa-sun',
      toggle: toggleTheme
    })
  }, [])

  const initialState = {
    theme: prefersDark.current ? 'dark' : 'light',
    icon: prefersDark.current ? 'fas fa-moon' : 'far fa-sun',
    toggle: toggleTheme
  }

  const [state, setState] = useState(initialState)

  return (
    <ThemeContext.Provider value={state}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
