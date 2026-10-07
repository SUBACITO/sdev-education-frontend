import { BrandLogo } from "@/components/brand-logo"
import Link from "next/link"
import { PageShell } from "./page-shell"

const navLink =
  "rounded-sm text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export function HomeFooter() {
  return (
    <PageShell
      as="footer"
      className="flex flex-wrap items-center gap-6 border-t border-border/70 py-8"
    >
      <BrandLogo href="#top" label="SDEV Team - về đầu trang" compact />
      <p className="mr-auto hidden text-xs text-muted-foreground sm:block">
        Learn. Build. Become.
      </p>
      <nav className="flex gap-7" aria-label="Điều hướng cuối trang">
        <Link className={navLink} href="/courses">
          Khóa học
        </Link>
        <a className={navLink} href="#lo-trinh">
          Lộ trình
        </a>
      </nav>
      <span className="text-[11px] text-muted-foreground">
        © 2026 SDEV Team
      </span>
    </PageShell>
  )
}
