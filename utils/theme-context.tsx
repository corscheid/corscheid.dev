'use client'

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useRef, useState, useContext } from 'react'

export interface ThemeData {
  theme: 'dark' | 'light'
  toggle: () => void
}

export const ThemeContext = React.createContext<ThemeData>({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggle: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDark = useRef<boolean>()

  const toggle = () => {
    setState((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = newTheme
      return {
        ...state,
        theme: newTheme
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
      toggle: toggle
    })
  }, [])

  const initialState: ThemeData = {
    theme: prefersDark.current ? 'dark' : 'light',
    toggle: toggle
  }

  const [state, setState] = useState<ThemeData>(initialState)

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
