import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Coins,
  Layers3,
  LockKeyhole,
  MonitorPlay,
  Play,
  Sparkles,
} from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"
import { PageShell } from "@/components/layout/page-shell"
import type { courses } from "@/app/(auth)/courses/_data/courses"

type Course = (typeof courses)[number]

export function CourseDetail({ course }: { course: Course }) {
  const Icon = course.icon
  const lessons = [
    {
      title: `Bắt đầu với ${course.title}`,
      detail: "Làm quen với mục tiêu và lộ trình học",
    },
    ...course.topics.map((topic) => ({
      title: topic,
      detail: "Kiến thức trọng tâm và bài tập ứng dụng",
    })),
    {
      title: "Dự án tổng kết",
      detail: "Kết nối kiến thức vào một sản phẩm hoàn chỉnh",
    },
  ]

  return (
    <PageShell as="main">
      <nav
        aria-label="Đường dẫn"
        className="mb-9 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
      >
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Tất cả khóa học
        </Link>
        <span aria-hidden="true" className="mx-1 text-border">
          /
        </span>
        <span aria-current="page" className="font-medium text-foreground">
          {course.title}
        </span>
      </nav>

      <div className="grid gap-x-8 gap-y-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:gap-x-12">
        <div className="min-w-0 lg:col-start-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.12em] text-primary">
              {course.category}
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] font-bold tracking-[0.12em] text-muted-foreground">
              SDEV / {course.number}
            </span>
          </div>
          <h1 className="mt-5 max-w-[750px] text-[clamp(2.5rem,4.3vw,4rem)] leading-[1.08] font-extrabold tracking-[-0.06em]">
            {course.title}
          </h1>
          <p className="mt-5 max-w-[700px] text-base leading-8 text-muted-foreground sm:text-lg">
            {course.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="size-4 text-primary" aria-hidden="true" />{" "}
              {lessons.length} chặng học
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers3 className="size-4 text-sdev-cyan" aria-hidden="true" />{" "}
              {course.stack.length} công nghệ chính
            </span>
            <span className="inline-flex items-center gap-2">
              <MonitorPlay
                className="size-4 text-sdev-pink"
                aria-hidden="true"
              />{" "}
              Học theo lộ trình
            </span>
          </div>
          <div
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Công nghệ trong khóa học"
          >
            {course.stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside
          aria-label="Thông tin đăng ký khóa học"
          className="overflow-hidden rounded-[22px] border border-border bg-card shadow-xl shadow-primary/5 lg:sticky lg:top-6 lg:col-start-2 lg:row-span-3 lg:row-start-1"
        >
          <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-primary/20 via-secondary to-sdev-cyan/15">
            <div
              className="pointer-events-none absolute -top-16 -right-12 size-56 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 size-52 rounded-full bg-sdev-cyan/15 blur-3xl"
              aria-hidden="true"
            />
            <span className="absolute top-5 left-5 font-mono text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
              SDEV / COURSE {course.number}
            </span>
            <span
              className={cn(
                "relative grid size-22 place-items-center rounded-[22px] border border-border shadow-lg",
                course.accent
              )}
            >
              <Icon className="size-11" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="absolute right-5 bottom-4 font-mono text-xs font-semibold text-muted-foreground">
              {course.stack[0]} ↗
            </span>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold text-muted-foreground">
              Giá khóa học
            </p>
            <p
              className="mt-2 flex items-baseline gap-2 text-[36px] leading-none font-extrabold tracking-[-0.05em]"
              aria-label={`${course.price.toLocaleString("vi-VN")} xu`}
            >
              <Coins
                className="size-7 self-center text-sdev-gold"
                aria-hidden="true"
              />
              {course.price.toLocaleString("vi-VN")}
              <span className="text-sm font-semibold tracking-normal text-muted-foreground">
                xu
              </span>
            </p>
            <Link
              href="/#dang-nhap"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-12 w-full justify-center gap-2 rounded-[9px] bg-gradient-to-r from-sdev-action-start to-sdev-action-end text-sm font-bold text-white shadow-md shadow-primary/20 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              )}
            >
              Đăng ký học <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={`/learning/${course.id}`}
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-[9px] border border-border bg-card text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Play className="size-4" aria-hidden="true" /> Xem bài học mẫu
            </Link>
            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
              Đăng nhập để tiếp tục đăng ký khóa học.
            </p>
            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-4 text-xs font-bold text-foreground">
                Khóa học này dành cho bạn nếu muốn
              </p>
              <ul className="space-y-3 text-xs leading-5 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />{" "}
                  Học theo lộ trình rõ ràng
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />{" "}
                  Áp dụng kiến thức vào dự án
                </li>
                <li className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />{" "}
                  Nắm vững {course.stack[0]}
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <section
          aria-labelledby="outcomes-title"
          className="min-w-0 rounded-[20px] border border-border bg-card p-6 shadow-sm sm:p-7 lg:col-start-1"
        >
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            <span className="font-mono text-[10px] font-bold tracking-[0.16em]">
              KẾT QUẢ SAU KHÓA HỌC
            </span>
          </div>
          <h2
            id="outcomes-title"
            className="mt-2 text-xl font-bold tracking-tight"
          >
            Bạn sẽ học được gì?
          </h2>
          <ul className="mt-6 grid gap-x-7 gap-y-4 sm:grid-cols-2">
            {course.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 text-sm leading-6 text-foreground"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="curriculum-title"
          className="min-w-0 lg:col-start-1"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-primary">
                LỘ TRÌNH HỌC
              </span>
              <h2
                id="curriculum-title"
                className="mt-2 text-2xl font-bold tracking-tight"
              >
                Nội dung khóa học
              </h2>
            </div>
            <span className="text-sm text-muted-foreground">
              {lessons.length} chặng học
            </span>
          </div>
          <ol className="overflow-hidden rounded-[20px] border border-border bg-card shadow-sm">
            {lessons.map((lesson, index) => (
              <li
                key={lesson.title}
                className="flex items-center gap-4 border-b border-border px-4 py-4 last:border-b-0 sm:px-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary font-mono text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm leading-5 font-semibold text-foreground">
                    {lesson.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {lesson.detail}
                  </p>
                </div>
                <LockKeyhole
                  className="size-4 shrink-0 text-muted-foreground/60"
                  aria-label="Cần đăng nhập để học"
                />
              </li>
            ))}
          </ol>
          <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
            <LockKeyhole
              className="mt-0.5 size-3.5 shrink-0"
              aria-hidden="true"
            />{" "}
            Đăng nhập và đăng ký để bắt đầu học. Lộ trình chi tiết sẽ được cập
            nhật khi khóa học mở.
          </p>
        </section>
      </div>

      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Khám phá các khóa học khác{" "}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </PageShell>
  )
}
