// src/components/ThemeProvider.jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved

    // default to system if none is saved
    return 'system'
  })

  useEffect(() => {
    const root = document.documentElement

    const applyTheme = () => {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (theme === 'dark') {
        root.classList.add('dark')
      } else if (theme === 'light') {
        root.classList.remove('dark')
      } else {
        // 'system'
        root.classList.toggle('dark', systemPrefersDark)
      }
    }

    applyTheme()
    localStorage.setItem('theme', theme)

    // Optional: Listen to system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const systemListener = () => {
      if (theme === 'system') {
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', systemListener)
    return () => mediaQuery.removeEventListener('change', systemListener)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
