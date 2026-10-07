import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageShell } from "./page-shell"

const navLink =
  "rounded-sm text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export function HomeHeader() {
  return (
    <PageShell
      as="header"
      size="wide"
      className="relative z-10 flex h-[78px] items-center justify-between border-b border-border/70 min-[821px]:h-[98px]"
    >
      <BrandLogo href="#top" label="SDEV Team - về đầu trang" />
      <nav
        className="hidden items-center gap-10 min-[821px]:flex"
        aria-label="Điều hướng chính"
      >
        <Link className={navLink} href="/courses">
          Khóa học
        </Link>
        <a className={navLink} href="#lo-trinh">
          Lộ trình
        </a>
        <a className={navLink} href="#ve-chung-toi">
          Về SDEV
        </a>
      </nav>
      <div className="ml-auto flex items-center gap-3 min-[821px]:ml-0">
        <ThemeToggle />
        <a
          className="hidden items-center gap-4 rounded-[9px] border border-primary/40 px-5 py-3 text-[13px] font-bold text-primary transition hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring min-[821px]:inline-flex"
          href="#dang-nhap"
        >
          Bắt đầu học <ArrowUpRight size={16} />
        </a>
      </div>
      <details className="group relative ml-5 min-[821px]:hidden">
        <summary
          className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
          aria-label="Mở menu"
        >
          <span className="text-xl leading-none">☰</span>
        </summary>
        <nav
          className="absolute top-12 right-0 z-20 grid min-w-44 gap-1 rounded-xl border border-border bg-card p-2 shadow-xl"
          aria-label="Điều hướng di động"
        >
          <Link className={`${navLink} p-2`} href="/courses">
            Khóa học
          </Link>
          <a className={`${navLink} p-2`} href="#lo-trinh">
            Lộ trình
          </a>
          <a className={`${navLink} p-2`} href="#ve-chung-toi">
            Về SDEV
          </a>
          <a className={`${navLink} p-2`} href="#dang-nhap">
            Đăng nhập
          </a>
        </nav>
      </details>
    </PageShell>
  )
}
