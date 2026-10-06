import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BrandLogo } from "@/components/brand-logo"

export function CatalogHeader() {
  return (
    <header className="border-b border-border/70 bg-card/40">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-5 px-[18px] sm:px-[22px] lg:px-12">
        <BrandLogo href="/" />
        <nav
          className="hidden items-center gap-9 text-sm font-medium md:flex"
          aria-label="Điều hướng chính"
        >
          <Link
            href="/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Trang chủ
          </Link>
          <Link
            href="/courses"
            className="rounded-sm text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Khóa học
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#dang-nhap"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "hidden h-10 rounded-[9px] border-primary/40 px-4 font-semibold text-primary hover:bg-accent sm:inline-flex"
            )}
          >
            Đăng nhập <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
