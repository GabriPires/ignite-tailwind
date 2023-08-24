import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './Button'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      className="w-fit"
      title={
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
      onClick={handleChangeTheme}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
