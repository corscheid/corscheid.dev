import React from 'react'

export const ThemeContext = React.createContext({
  theme: 'dark',
  icon: 'fas fa-moon',
  toggle: () => {}
})
