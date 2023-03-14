import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = (theme === 'dark')
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const onToggleTheme= () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { onToggleTheme, isDarkTheme }
}
