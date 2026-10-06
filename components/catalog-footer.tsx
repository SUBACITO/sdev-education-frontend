import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

export function CatalogFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-[18px] py-8 text-xs text-muted-foreground sm:px-[22px] lg:px-12">
        <BrandLogo href="/" compact />
        <span>© 2026 SDEV Team</span>
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Về trang chủ <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </footer>
  )
}
