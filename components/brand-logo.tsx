import Link from "next/link"

type BrandLogoProps = {
  href: string
  label?: string
  compact?: boolean
}

export function BrandLogo({
  href,
  label = "SDEV Team - về trang chủ",
  compact = false,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`inline-flex items-center gap-3 rounded-md leading-[0.9] font-extrabold tracking-[-0.06em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${compact ? "text-[19px]" : "text-2xl"}`}
    >
      <span
        className={`grid -rotate-[18deg] grid-cols-2 gap-[3px] ${compact ? "size-[25px]" : "size-8"}`}
        aria-hidden="true"
      >
        <span className="rounded-[4px] bg-primary/60" />
        <span className="rounded-[4px] bg-primary" />
        <span className="rounded-[4px] bg-primary" />
        <span className="rounded-[4px] bg-primary/60" />
      </span>
      <span>
        SDEV<span className="text-primary">.</span>
        <small
          className={`mt-1 block font-bold tracking-[0.34em] text-muted-foreground ${compact ? "text-[6px]" : "text-[8px]"}`}
        >
          TEAM
        </small>
      </span>
    </Link>
  )
}
