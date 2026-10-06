import Link from "next/link"
import { cn } from "cn"
import styles from "./brand-logo.module.css"

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
      className={cn(styles.brand, compact && styles.compact)}
    >
      <span className={styles.mark} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className={styles.wordmark}>
        SDEV<span className={styles.dot}>.</span>
        <small>TEAM</small>
      </span>
    </Link>
  )
}
