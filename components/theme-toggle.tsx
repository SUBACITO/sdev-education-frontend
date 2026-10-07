"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  return (
    <button
      type="button"
      className="inline-grid size-11 place-items-center rounded-lg border border-border bg-card text-primary transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={
        mounted && resolvedTheme === "dark"
          ? "Bật giao diện sáng"
          : "Bật giao diện tối"
      }
      title={
        mounted && resolvedTheme === "dark" ? "Giao diện sáng" : "Giao diện tối"
      }
    >
      <span className="grid place-items-center">
        {mounted && resolvedTheme === "dark" ? (
          <Sun size={17} />
        ) : (
          <Moon size={17} />
        )}
      </span>
    </button>
  )
}
