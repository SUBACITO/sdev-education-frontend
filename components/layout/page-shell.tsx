import type { HTMLAttributes } from "react"
import { cn } from "cn"

type PageShellProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "main" | "section" | "header" | "footer"
  size?: "wide" | "content"
}

export function PageShell({
  as: Tag = "div",
  size = "content",
  className,
  ...props
}: PageShellProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-[18px] min-[521px]:px-[22px] min-[821px]:px-12",
        size === "wide" ? "max-w-[1400px]" : "max-w-[1280px]",
        Tag === "main" && "pt-10 pb-20 sm:pb-24",
        className
      )}
      {...props}
    />
  )
}
