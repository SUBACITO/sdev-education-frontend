"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Coins, Sparkles, X } from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet"
import { courses } from "../_data/courses"

type Course = (typeof courses)[number]
type BattlePhase = "idle" | "cover" | "hold" | "reveal"

function CourseDetails({ course }: { course: Course }) {
  const Icon = course.icon

  return (
    <>
      <div className="relative overflow-hidden border-b border-border bg-secondary/50 px-7 pt-8 pb-9 sm:px-12 sm:pt-11 sm:pb-10">
        <div
          className={cn(
            "pointer-events-none absolute -top-20 -right-14 size-72 rounded-full opacity-70 blur-3xl",
            course.glow
          )}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-3 bottom-0 font-mono text-[clamp(8rem,21vw,16rem)] leading-none font-black tracking-[-0.12em] text-primary/10 select-none"
          aria-hidden="true"
        >
          {course.number}
        </span>
        <div className="relative flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-primary uppercase">
          <span
            className="h-1 w-7 skew-x-[-25deg] bg-primary"
            aria-hidden="true"
          />
          {course.category} / HỒ SƠ KHÓA HỌC
        </div>
        <div className="relative mt-8 flex max-w-[780px] items-start gap-4 sm:mt-9 sm:gap-6">
          <span
            className={cn(
              "grid size-14 shrink-0 place-items-center rounded-2xl border border-border shadow-lg sm:size-18",
              course.accent
            )}
          >
            <Icon
              className="size-7 sm:size-9"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="font-mono text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
              Lựa chọn #{course.number}
            </p>
            <SheetTitle className="mt-2 text-[clamp(1.65rem,2.6vw,2.5rem)] leading-[1.12] font-extrabold tracking-[-0.045em]">
              {course.title}
            </SheetTitle>
          </div>
        </div>
        <SheetDescription className="relative mt-5 max-w-[720px] text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base">
          {course.description}
        </SheetDescription>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-7 py-8 sm:px-10 sm:py-10">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <h3 className="font-mono text-xs font-bold tracking-[0.16em] text-primary uppercase">
            [ Nội dung chính ]
          </h3>
          <Sparkles className="size-4 text-sdev-gold" aria-hidden="true" />
        </div>
        <ul className="mt-5 grid gap-4">
          {course.topics.map((topic, index) => (
            <li
              key={topic}
              className="flex h-full items-start gap-4 rounded-xl border border-border bg-secondary/30 px-4 py-4 text-sm leading-6 sm:text-base"
            >
              <span className="font-mono text-xs font-bold text-primary">
                0{index + 1}
              </span>
              <span className="flex-1">{topic}</span>
              <Check
                className="mt-1 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Công nghệ chính">
          {course.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-10">
          <div className="flex items-end justify-between gap-4 border-t border-border pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Giá khóa học</p>
              <p
                className="mt-1 flex items-center gap-2 text-[clamp(2rem,4vw,3rem)] leading-none font-black tracking-tight"
                aria-label={`${course.price.toLocaleString("vi-VN")} xu`}
              >
                {course.price.toLocaleString("vi-VN")}
                <Coins
                  className="size-7 text-sdev-gold"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </p>
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-muted-foreground">
              SDEV / {course.number}
            </span>
          </div>
          <Link
            href="/#dang-nhap"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-13 w-full gap-3 rounded-[9px] px-5 text-sm font-bold focus-visible:ring-ring sm:text-base"
            )}
          >
            Đăng nhập để đăng ký{" "}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  )
}

export function CourseCatalog() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [targetId, setTargetId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [battlePhase, setBattlePhase] = useState<BattlePhase>("idle")
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const battleTimers = useRef<ReturnType<typeof setTimeout>[]>([])
  const battlePhaseRef = useRef<BattlePhase>("idle")
  const displayedId = useRef<string | null>(null)
  const desiredId = useRef<string | null>(null)
  const keyboardTrigger = useRef<HTMLButtonElement | null>(null)
  const selectedCourse = courses.find((course) => course.id === selectedId)
  const targetCourse = courses.find((course) => course.id === targetId)

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const clearBattle = () => {
    battleTimers.current.forEach(clearTimeout)
    battleTimers.current = []
    battlePhaseRef.current = "idle"
    setBattlePhase("idle")
  }
  const runBattle = () => {
    if (
      battlePhaseRef.current !== "idle" ||
      !desiredId.current ||
      desiredId.current === displayedId.current
    )
      return

    battlePhaseRef.current = "cover"
    setBattlePhase("cover")
    battleTimers.current.push(
      setTimeout(() => {
        displayedId.current = desiredId.current
        setSelectedId(displayedId.current)
        battlePhaseRef.current = "hold"
        setBattlePhase("hold")
        battleTimers.current.push(
          setTimeout(() => {
            battlePhaseRef.current = "reveal"
            setBattlePhase("reveal")
            battleTimers.current.push(
              setTimeout(() => {
                battlePhaseRef.current = "idle"
                setBattlePhase("idle")
                runBattle()
              }, 320)
            )
          }, 140)
        )
      }, 320)
    )
  }
  const openCourse = (id: string) => {
    cancelClose()
    if (!open) {
      clearBattle()
      displayedId.current = id
      desiredId.current = id
      setTargetId(id)
      setSelectedId(id)
      setOpen(true)
      return
    }
    desiredId.current = id
    setTargetId(id)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clearBattle()
      displayedId.current = id
      setSelectedId(id)
    } else {
      runBattle()
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => close(), 220)
  }
  const close = (restoreFocus = false) => {
    cancelClose()
    clearBattle()
    desiredId.current = displayedId.current
    setOpen(false)
    if (restoreFocus) keyboardTrigger.current?.focus()
    keyboardTrigger.current = null
  }

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
      battleTimers.current.forEach(clearTimeout)
    },
    []
  )

  return (
    <section
      aria-label="Các khóa học"
      onKeyDown={(event) => {
        if (event.key === "Escape") close(true)
      }}
    >
      <div className="grid gap-5 pt-8 lg:grid-cols-3">
        {courses.map((course) => {
          const Icon = course.icon
          const active = open && selectedId === course.id
          return (
            <article
              id={course.id}
              key={course.id}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  openCourse(course.id)
                }
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") scheduleClose()
              }}
              className={cn(
                "group relative flex min-h-[350px] scroll-mt-8 flex-col overflow-hidden rounded-[22px] border border-border bg-card p-6 shadow-sm transition-[border-color,transform,box-shadow] duration-300 ease-out sm:p-7",
                "focus-within:border-primary/60 focus-within:shadow-xl focus-within:shadow-primary/15 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15",
                "motion-safe:focus-within:-translate-y-2 motion-safe:hover:-translate-y-2 motion-reduce:transition-none"
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-16 -right-16 size-48 rounded-full opacity-50 blur-3xl",
                  course.glow
                )}
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-muted-foreground">
                  {course.category} / {course.number}
                </span>
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-xl transition-transform duration-300 motion-safe:group-hover:-rotate-6",
                    course.accent
                  )}
                >
                  <Icon
                    className="size-6"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h2 className="relative mt-9 text-[25px] leading-tight font-bold tracking-[-0.04em]">
                {course.title}
              </h2>
              <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                {course.description}
              </p>
              <div
                className="relative mt-6 flex flex-wrap gap-2"
                aria-label="Công nghệ chính"
              >
                {course.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                aria-expanded={active}
                aria-controls={active ? "course-detail-panel" : undefined}
                onClick={(event) => {
                  cancelClose()
                  if (active) {
                    close()
                  } else {
                    openCourse(course.id)
                    if (event.detail === 0) {
                      keyboardTrigger.current = event.currentTarget
                      requestAnimationFrame(() =>
                        document.getElementById("course-panel-close")?.focus()
                      )
                    }
                  }
                }}
                className="relative mt-auto flex w-fit items-center gap-2 rounded-sm pt-7 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {active ? "Đóng chi tiết" : "Xem chi tiết"}{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </article>
          )
        })}
      </div>

      <Sheet
        open={open}
        onOpenChange={(nextOpen) => {
          if (nextOpen) setOpen(true)
          else close()
        }}
        modal={false}
      >
        {selectedCourse && (
          <SheetContent
            id="course-detail-panel"
            side="right"
            showCloseButton={false}
            overlayClassName="pointer-events-none"
            initialFocus={false}
            onPointerEnter={cancelClose}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") scheduleClose()
            }}
            className="h-dvh gap-0 overflow-x-clip overflow-y-auto border-l-4 border-primary bg-card p-0 text-foreground shadow-2xl shadow-primary/25 data-[side=right]:w-full data-[side=right]:sm:w-[80vw] data-[side=right]:sm:max-w-none data-[side=right]:lg:w-[50vw]"
          >
            <SheetClose
              id="course-panel-close"
              onClick={() => close(true)}
              aria-label="Đóng chi tiết khóa học"
              className="absolute top-4 right-4 z-10 grid size-11 place-items-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:top-7 sm:right-7"
            >
              <X className="size-5" aria-hidden="true" />
            </SheetClose>
            <CourseDetails course={selectedCourse} />
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 z-20 flex items-center overflow-hidden bg-card",
                battlePhase === "idle"
                  ? "translate-x-full transition-none"
                  : battlePhase === "reveal"
                    ? "-translate-x-full transition-transform duration-[320ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                    : "translate-x-0 transition-transform duration-[320ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-card to-sdev-cyan/20" />
              <div className="absolute inset-y-0 left-[12%] w-20 -skew-x-12 bg-primary/20 sm:w-28" />
              <div className="absolute inset-y-0 left-[36%] w-3 -skew-x-12 bg-primary/50" />
              <div className="absolute inset-y-0 right-[16%] w-2 -skew-x-12 bg-sdev-cyan/60" />
              <span className="absolute right-0 bottom-0 font-mono text-[clamp(9rem,25vw,18rem)] leading-none font-black tracking-[-0.12em] text-primary/10">
                {targetCourse?.number}
              </span>
              <div className="relative px-8 sm:px-12">
                <p className="font-mono text-xs font-bold tracking-[0.24em] text-primary uppercase">
                  SDEV / CHỌN KHÓA HỌC
                </p>
                <p className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight font-black tracking-[-0.06em] uppercase">
                  Đang chuyển hồ sơ
                </p>
                <div className="mt-7 flex gap-2">
                  {[0, 1, 2, 3, 4].map((segment) => (
                    <span
                      key={segment}
                      className="h-1.5 w-10 -skew-x-12 animate-pulse bg-primary"
                      style={{ animationDelay: `${segment * 90}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        )}
      </Sheet>
    </section>
  )
}
