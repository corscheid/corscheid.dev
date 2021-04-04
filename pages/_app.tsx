import 'highlight.js/styles/default.css'
import '../styles/atom-one-dark.css'
import '../styles/globals.css'

import React, { useState } from 'react'

import type { AppProps } from 'next/app'
import { ThemeContext } from '../lib/theme-context'

export default function MyApp({ Component, pageProps }: AppProps) {
  const toggleTheme = () => {
    setState((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      const newIcon = state.theme === 'dark' ? 'far fa-sun' : 'fas fa-moon'
      document.documentElement.dataset.theme = newTheme
      console.log({ newTheme, newIcon })
      return {
        ...state,
        theme: newTheme,
        icon: newIcon
      }
    })
  }
  const initialState = {
    theme: 'dark',
    icon: 'fas fa-moon',
    toggle: toggleTheme
  }
  const [state, setState] = useState(initialState)

  return (
    <ThemeContext.Provider value={state}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
