"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  Circle,
  Code2,
  Lightbulb,
  LockKeyhole,
  Play,
  RotateCcw,
  Terminal,
} from "lucide-react"
import type { LearningCourse } from "./learning-data"
import { getExercise } from "./exercises"

const workerSource = `
self.onmessage = (event) => {
  const { code, expression } = event.data;
  const logs = [];
  const capture = {
    log: (...values) => logs.push(values.map(value => typeof value === 'string' ? value : JSON.stringify(value)).join(' ')),
    error: (...values) => logs.push(values.map(String).join(' ')),
  };
  try {
    const source = expression ? code + '\\nreturn (' + expression + ');' : code;
    const value = new Function('console', source)(capture);
    self.postMessage({ logs, value: JSON.stringify(value) });
  } catch (error) {
    self.postMessage({ logs, error: error instanceof Error ? error.message : String(error) });
  }
};
`

type RunResult = { logs: string[]; value?: string; error?: string }

function executeCode(code: string, expression?: string): Promise<RunResult> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(
      new Blob([workerSource], { type: "text/javascript" })
    )
    const worker = new Worker(url)
    let settled = false
    const finish = (result: RunResult) => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      worker.terminate()
      URL.revokeObjectURL(url)
      resolve(result)
    }
    const timeout = setTimeout(
      () =>
        finish({
          logs: [],
          error: "Mã chạy quá 3 giây. Hãy kiểm tra vòng lặp của bạn.",
        }),
      3000
    )
    worker.onmessage = (event: MessageEvent<RunResult>) => finish(event.data)
    worker.onerror = () =>
      finish({ logs: [], error: "Không thể chạy đoạn mã này." })
    worker.postMessage({ code, expression })
  })
}

type Feedback = {
  tone: "idle" | "success" | "error"
  message: string
  lines: string[]
}

export function LearningWorkspace({ course }: { course: LearningCourse }) {
  const exercise = getExercise(course.slug)
  const [code, setCode] = useState(exercise.starter)
  const [feedback, setFeedback] = useState<Feedback>({
    tone: "idle",
    message:
      "Nhấn Chạy thử để xem kết quả. Khi sẵn sàng, nhấn Nộp bài để kiểm tra.",
    lines: [],
  })
  const [running, setRunning] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const progress = completed ? Math.round(100 / course.lessons.length) : 0
  const backHref =
    course.slug === "javascript-nen-tang"
      ? "/courses"
      : `/courses/${course.slug}`

  async function run(mode: "try" | "submit") {
    if (running) return
    setRunning(true)
    setFeedback({
      tone: "idle",
      message: "Đang chạy mã trong môi trường tách biệt…",
      lines: [],
    })
    const result = await executeCode(
      code,
      mode === "submit" ? exercise.testExpression : undefined
    )
    setRunning(false)
    if (result.error) {
      setFeedback({ tone: "error", message: result.error, lines: result.logs })
      return
    }
    const lines = result.logs.length
      ? result.logs
      : [result.value ?? "Không có kết quả in ra."]
    if (mode === "submit") {
      if (result.value === exercise.expected) {
        setCompleted(true)
        setFeedback({
          tone: "success",
          message: "Chính xác! Bạn đã hoàn thành bài thực hành mẫu.",
          lines,
        })
      } else {
        setFeedback({
          tone: "error",
          message: "Kết quả chưa đúng. Xem gợi ý rồi thử lại nhé.",
          lines,
        })
      }
      return
    }
    setFeedback({
      tone: "idle",
      message: "Mã đã chạy. Kiểm tra kết quả bên dưới trước khi nộp bài.",
      lines,
    })
  }

  function reset() {
    setCode(exercise.starter)
    setFeedback({ tone: "idle", message: "Đã đặt lại mã ban đầu.", lines: [] })
  }

  return (
    <div className="bg-background text-foreground">
      <header className="border-b border-border bg-card/80">
        <div className="flex min-h-12 flex-wrap items-center justify-between gap-3 px-4 py-1 sm:px-6 xl:px-8">
          <Link
            href={backHref}
            className="inline-flex min-w-0 items-center gap-2 rounded-sm text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{course.title}</span>
          </Link>
          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              {completed ? 1 : 0}/{course.lessons.length} bài
            </span>
            <div
              className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary sm:w-32"
              role="progressbar"
              aria-label="Tiến độ học"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <strong className="w-9 text-right font-mono text-xs text-primary">
              {progress}%
            </strong>
          </div>
        </div>
      </header>
      <main>
        <div className="grid min-h-[calc(100dvh-129px)] w-full gap-0 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[clamp(240px,15.5vw,300px)_minmax(0,42fr)_minmax(0,50fr)]">
          <aside
            aria-label="Nội dung khóa học"
            className="border-b border-border px-4 py-6 sm:px-6 lg:border-r lg:border-b-0 lg:px-5"
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
              <BookOpen className="size-4 text-primary" aria-hidden="true" />
              NỘI DUNG KHÓA HỌC
            </div>
            <ol className="grid gap-1.5">
              {course.lessons.map((lesson, index) => (
                <li key={lesson}>
                  {index === 0 ? (
                    <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/10 px-3 py-3 text-sm text-primary">
                      <span className="mt-0.5 shrink-0">
                        {completed ? (
                          <CheckCircle2 className="size-4" aria-hidden="true" />
                        ) : (
                          <Circle className="size-4" aria-hidden="true" />
                        )}
                      </span>
                      <span className="min-w-0">
                        <strong className="block text-xs leading-5">
                          {index + 1}. {lesson}
                        </strong>
                        <small className="mt-1 block text-[11px] text-muted-foreground">
                          Bài học mẫu · 15 phút
                        </small>
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground">
                      <LockKeyhole
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="min-w-0">
                        <span className="block text-xs leading-5">
                          {index + 1}. {lesson}
                        </span>
                        <small className="mt-1 block text-[11px]">
                          Sắp cập nhật
                        </small>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-xl border border-border bg-secondary/40 p-3 text-xs leading-5 text-muted-foreground">
              Đây là bản xem thử bài học đầu tiên. Các bài tiếp theo sẽ được cập
              nhật khi khóa học mở.
            </p>
          </aside>
          <article className="min-w-0 px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
            <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-primary">
              BÀI 1 / {course.lessons.length} · BÀI HỌC MẪU
            </span>
            <h1 className="mt-3 text-2xl leading-[1.15] font-bold tracking-[-0.04em] sm:text-[28px]">
              {course.lessons[0]}
            </h1>
            <p className="mt-3 text-xs text-muted-foreground">
              15 phút · {course.technology} · Thực hành trực tiếp
            </p>
            <p className="mt-8 text-sm leading-7 text-muted-foreground sm:text-base">
              {course.description}
            </p>
            <section aria-labelledby="concept-title" className="mt-9">
              <h2 id="concept-title" className="text-lg font-bold">
                Ý tưởng chính
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {exercise.concept}
              </p>
            </section>
            <section aria-labelledby="example-title" className="mt-8">
              <h2 id="example-title" className="text-lg font-bold">
                Ví dụ ngắn
              </h2>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-[12px] leading-6 text-foreground shadow-sm">
                <code>{exercise.example}</code>
              </pre>
            </section>
            <section aria-labelledby="practice-title" className="mt-8">
              <h2 id="practice-title" className="text-lg font-bold">
                Đến lượt bạn
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {exercise.description}
              </p>
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6">
                <Check
                  className="mt-1 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  Viết lời giải ở trình soạn thảo bên phải, chạy thử và nộp bài
                  khi kết quả đúng.
                </span>
              </div>
            </section>
            <div className="mt-10 border-t border-border pt-5 text-xs text-muted-foreground">
              Tiến độ trong bản xem thử chỉ được giữ khi bạn đang ở trang này.
            </div>
          </article>
          <section
            aria-labelledby="exercise-title"
            className="min-w-0 border-t border-border px-4 py-8 sm:px-6 lg:col-start-2 lg:px-8 xl:col-start-3 xl:row-start-1 xl:border-t-0 xl:border-l xl:px-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="size-4" aria-hidden="true" />
                </span>
                <h2 id="exercise-title" className="text-lg font-bold">
                  Bài tập thực hành
                </h2>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${completed ? "bg-sdev-cyan/10 text-sdev-cyan" : "bg-secondary text-muted-foreground"}`}
              >
                {completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
              </span>
            </div>
            <div className="mt-5 rounded-xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold">{exercise.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {exercise.description}
              </p>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-secondary/50 px-4 py-3 text-xs">
                <span className="flex items-center gap-2 font-mono font-bold text-foreground">
                  <span className="size-2 rounded-full bg-sdev-pink" />
                  <span className="size-2 rounded-full bg-sdev-gold" />
                  <span className="size-2 rounded-full bg-sdev-cyan" /> main.js
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setShowHint((value) => !value)}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <Lightbulb className="size-3.5" aria-hidden="true" /> Gợi ý
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <RotateCcw className="size-3.5" aria-hidden="true" /> Đặt
                    lại
                  </button>
                </div>
              </div>
              <div className="flex min-h-[310px] bg-card font-mono text-[12px] leading-6">
                <div
                  aria-hidden="true"
                  className="border-r border-border bg-secondary/20 px-3 py-4 text-right text-muted-foreground/60 select-none"
                >
                  {code.split("\n").map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                <textarea
                  aria-label="Trình soạn thảo JavaScript"
                  spellCheck={false}
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  onKeyDown={(event) => {
                    if (
                      (event.ctrlKey || event.metaKey) &&
                      event.key === "Enter"
                    ) {
                      event.preventDefault()
                      void run("try")
                    }
                    if (event.key === "Tab") {
                      event.preventDefault()
                      const input = event.currentTarget
                      const start = input.selectionStart
                      const end = input.selectionEnd
                      setCode(code.slice(0, start) + "  " + code.slice(end))
                      requestAnimationFrame(() => {
                        input.selectionStart = input.selectionEnd = start + 2
                      })
                    }
                  }}
                  className="min-h-[310px] w-full resize-y bg-transparent p-4 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                />
              </div>
              <div className="border-t border-border bg-secondary/30 px-4 py-2 text-[10px] text-muted-foreground">
                Tab: thụt lề · Ctrl/⌘ + Enter: chạy thử
              </div>
            </div>
            {showHint && (
              <p className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs leading-5 text-foreground">
                <strong className="text-primary">Gợi ý:</strong> {exercise.hint}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void run("try")}
                disabled={running}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-wait disabled:opacity-60"
              >
                <Play className="size-4" aria-hidden="true" /> Chạy thử
              </button>
              <button
                type="button"
                onClick={() => void run("submit")}
                disabled={running}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-sdev-action-start to-sdev-action-end px-4 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-wait disabled:opacity-60"
              >
                <Check className="size-4" aria-hidden="true" /> Nộp bài
              </button>
            </div>
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 rounded-xl border p-4 text-sm ${feedback.tone === "success" ? "border-sdev-cyan/30 bg-sdev-cyan/5" : feedback.tone === "error" ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"}`}
            >
              <div className="flex items-start gap-2">
                <Terminal
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="leading-6">{feedback.message}</span>
              </div>
              {feedback.lines.length > 0 && (
                <pre className="mt-3 overflow-x-auto rounded-lg bg-secondary/50 p-3 font-mono text-xs leading-5 text-foreground">
                  {feedback.lines.join("\n")}
                </pre>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
