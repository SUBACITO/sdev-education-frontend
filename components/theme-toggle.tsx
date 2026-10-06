"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false)

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={mounted && resolvedTheme === "dark" ? "Bật giao diện sáng" : "Bật giao diện tối"}
      title={mounted && resolvedTheme === "dark" ? "Giao diện sáng" : "Giao diện tối"}
    >
      <span className="theme-toggle-icon">
        {mounted && resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </span>
    </button>
  )
}
