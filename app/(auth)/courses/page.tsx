import type { Metadata } from "next"
import Link from "next/link"
import { CourseCatalog } from "../../../components/courses/course-catalog"
import { courses } from "./_data/courses"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Danh sách khóa học | SDEV Team",
  description:
    "Danh sách khóa học Frontend, Backend, Fullstack, Next.js, NestJS, PostgreSQL, Docker, Redis và BullMQ của SDEV Team.",
}

export default function CoursesPage() {
  return (
    <PageShell as="main">
      <nav
        aria-label="Đường dẫn"
        className="flex items-center gap-2 text-xs text-muted-foreground"
      >
        <Link
          href="/"
          className="rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Trang chủ
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-foreground">
          Khóa học
        </span>
      </nav>

      <div className="mt-12 flex flex-col justify-between gap-6 border-b border-border pb-10 sm:mt-16 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[0.16em] text-primary uppercase">
            [ DANH SÁCH KHÓA HỌC ]
          </p>
          <h1 className="mt-4 text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.08] font-extrabold tracking-[-0.065em]">
            Khóa học <span className="text-primary">SDEV.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Chọn hướng học phù hợp với mục tiêu của bạn. Xem nội dung và mức giá
            của từng khóa trước khi đăng ký.
          </p>
        </div>
        <span className="w-fit rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold text-muted-foreground">
          {courses.length} khóa học
        </span>
      </div>

      <CourseCatalog />
    </PageShell>
  )
}
