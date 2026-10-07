"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import character from "@/app/(public)/banner/character.png"

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.22c0-.68-.06-1.36-.18-2.02H12v3.83h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.2Z"
      />
      <path
        fill="#34A853"
        d="M12 21.5c2.62 0 4.82-.87 6.43-2.35l-3.14-2.45c-.87.58-1.98.93-3.29.93-2.53 0-4.68-1.71-5.45-4H3.31v2.53A9.72 9.72 0 0 0 12 21.5Z"
      />
      <path
        fill="#FBBC05"
        d="M6.55 13.63a5.85 5.85 0 0 1 0-3.26V7.84H3.31a9.72 9.72 0 0 0 0 8.32l3.24-2.53Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.37c1.38 0 2.62.48 3.6 1.42l2.84-2.84A9.14 9.14 0 0 0 12 2.5a9.72 9.72 0 0 0-8.69 5.34l3.24 2.53c.77-2.29 2.92-4 5.45-4Z"
      />
    </svg>
  )
}

export function LoginForm() {
  const [message, setMessage] = useState("")

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-border bg-gradient-to-br from-card to-secondary/70 p-7 shadow-xl sm:p-8">
      <div
        className="pointer-events-none absolute -top-30 -right-16 h-40 w-56 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-3 right-3 h-[130px] w-[105px] overflow-hidden sm:top-2 sm:h-44 sm:w-[142px]"
        aria-hidden="true"
      >
        <div className="absolute top-4 right-0 size-30 rounded-full bg-primary/20 blur-xl" />
        <Image
          src={character}
          alt=""
          sizes="(max-width: 520px) 105px, 142px"
          priority
          className="absolute top-0 left-1/2 h-auto w-[170%] max-w-none -translate-x-1/2"
        />
      </div>
      <div className="relative flex items-center gap-2.5">
        <span
          className="grid size-7 -rotate-[18deg] grid-cols-2 gap-0.5"
          aria-hidden="true"
        >
          <span className="rounded-[3px] bg-primary/70" />
          <span className="rounded-[3px] bg-primary" />
          <span className="rounded-[3px] bg-primary" />
          <span className="rounded-[3px] bg-primary/70" />
        </span>
        <span className="text-[17px] leading-none font-extrabold tracking-[-0.06em]">
          SDEV<span className="text-primary">.</span>
          <small className="mt-1 block text-[6px] tracking-[0.28em] text-muted-foreground">
            TEAM
          </small>
        </span>
      </div>
      <div className="relative mt-18 mb-8 max-w-[290px] sm:mt-9 sm:max-w-[190px]">
        <h2 className="mb-2.5 text-[26px] leading-[1.2] font-bold tracking-[-0.05em]">
          Chào mừng trở lại
        </h2>
        <p className="text-xs leading-[1.65] text-muted-foreground">
          Đăng nhập để truy cập khóa học và tiếp tục hành trình của bạn.
        </p>
      </div>
      <button
        className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[9px] border border-border bg-card px-4 text-[13px] font-bold text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none"
        type="button"
        onClick={() =>
          setMessage(
            "Đăng nhập Google sẽ khả dụng khi kết nối hệ thống xác thực."
          )
        }
      >
        <GoogleIcon />
        <span>Đăng nhập với Google</span>
      </button>
      {message && (
        <p
          className="mt-3 text-[11px] leading-relaxed text-sdev-cyan"
          role="status"
        >
          {message}
        </p>
      )}
      <div className="mt-7 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-muted-foreground">Chưa sẵn sàng đăng nhập?</span>
        <a
          className="inline-flex items-center gap-1 rounded-sm font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          href="#khoa-hoc"
        >
          Xem khóa học <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
