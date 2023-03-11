'use client'

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useRef, useState } from 'react'

export const ThemeContext = React.createContext({
  theme: '',
  icon: '',
  toggle: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDark = useRef<boolean>()

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

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}
