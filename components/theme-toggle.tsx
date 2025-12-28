"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    console.log("[v0] Theme changing from", currentTheme, "to", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-10 h-10" />
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      className="hover:bg-muted transition-colors"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
