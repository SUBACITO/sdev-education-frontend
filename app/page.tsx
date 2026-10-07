import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Play,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { HomeHeader } from "@/components/layout/home-header"
import { HomeFooter } from "@/components/layout/home-footer"
import { PageShell } from "@/components/layout/page-shell"

const courses = [
  {
    number: "01",
    id: "frontend",
    tag: "FRONTEND",
    level: "Cơ bản → Nâng cao",
    title: "Frontend Engineering",
    description:
      "Từ giao diện đầu tiên đến trải nghiệm web khiến người dùng muốn ở lại.",
    stack: ["React", "Next.js", "TypeScript"],
    icon: Layers3,
    accent: "text-primary",
    iconStyle: "border-primary/40 bg-primary/15 text-primary",
  },
  {
    number: "02",
    id: "backend",
    tag: "BACKEND",
    level: "Thực chiến",
    title: "Backend & System Design",
    description:
      "Thiết kế API, dữ liệu và kiến trúc vững chắc cho sản phẩm thật.",
    stack: ["Node.js", "PostgreSQL", "Docker"],
    icon: Terminal,
    accent: "text-sdev-cyan",
    iconStyle: "border-sdev-cyan/40 bg-sdev-cyan/15 text-sdev-cyan",
  },
  {
    number: "03",
    id: "fullstack",
    tag: "FULLSTACK",
    level: "Từ A đến Z",
    title: "The Fullstack Path",
    description:
      "Kết nối mọi mảnh ghép để tự tin xây dựng và triển khai ứng dụng.",
    stack: ["Next.js", "Prisma", "Cloud"],
    icon: Code2,
    accent: "text-sdev-pink",
    iconStyle: "border-sdev-pink/40 bg-sdev-pink/15 text-sdev-pink",
  },
]

const benefits = [
  {
    value: "01",
    title: "Học đúng thứ cần dùng",
    description:
      "Nội dung bám sát công việc hằng ngày của developer, không lan man lý thuyết.",
  },
  {
    value: "02",
    title: "Làm dự án thật",
    description:
      "Mỗi chặng đều có sản phẩm để bạn áp dụng kiến thức và đưa vào portfolio.",
  },
  {
    value: "03",
    title: "Đi cùng cộng đồng",
    description:
      "Học hỏi, chia sẻ và giữ nhịp tiến bộ cùng những người có chung mục tiêu.",
  },
]

const kicker = "font-mono text-[10px] font-bold tracking-[0.16em] text-primary"
const heading =
  "text-[clamp(40px,4.3vw,62px)] leading-[1.08] font-bold tracking-[-0.065em]"
const primaryLink =
  "inline-flex min-h-[50px] items-center justify-center gap-6 rounded-[9px] bg-gradient-to-br from-sdev-action-start to-sdev-action-end px-6 text-[13px] font-bold text-white shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transform-none"

function CodeWindow() {
  return (
    <div
      className="relative mx-auto h-[355px] w-full max-w-[480px] sm:h-[460px] xl:h-[520px]"
      aria-hidden="true"
    >
      <div className="absolute top-[5%] left-1/2 size-[330px] -translate-x-1/2 rounded-full border border-primary/15 sm:size-[460px]" />
      <div className="absolute top-[14%] left-1/2 size-[270px] -translate-x-1/2 rounded-full border border-primary/10 sm:size-[350px]" />
      <div className="absolute top-[12%] left-1/2 size-[320px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:size-[400px]" />
      <div className="absolute top-[65px] left-1/2 w-[min(370px,100%)] -translate-x-1/2 -rotate-3 overflow-hidden rounded-[14px] border border-border bg-card shadow-2xl sm:top-[105px] sm:w-[445px]">
        <div className="flex h-[45px] items-center justify-between border-b border-border bg-secondary/70 px-4 font-mono text-[11px] text-muted-foreground">
          <div className="flex gap-1.5">
            <i className="size-[7px] rounded-full bg-sdev-pink" />
            <i className="size-[7px] rounded-full bg-sdev-gold" />
            <i className="size-[7px] rounded-full bg-sdev-cyan" />
          </div>
          <span className="flex items-center gap-2">
            <Code2 size={13} /> your-future.tsx
          </span>
          <span className="text-lg">+</span>
        </div>
        <div className="flex gap-3 overflow-hidden px-3 py-5 font-mono text-[9px] leading-[2] whitespace-nowrap text-foreground sm:gap-5 sm:px-6 sm:text-[11px]">
          <div className="text-right text-muted-foreground/50">
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
          </div>
          <div>
            <div>
              <span className="text-primary">const</span>{" "}
              <span className="text-sdev-cyan">you</span> = {"{"}
            </div>
            <div className="pl-5">
              passion: <span className="text-sdev-cyan">true</span>,
            </div>
            <div className="pl-5">
              skills:{" "}
              <span className="text-sdev-gold">
                {'["frontend", "backend"]'}
              </span>
              ,
            </div>
            <div className="pl-5">
              potential: <span className="text-primary">Infinity</span>
            </div>
            <div>{"};"}</div>
            <div>&nbsp;</div>
            <div>
              <span className="text-primary">await</span>{" "}
              <span className="text-sdev-cyan">buildYourFuture</span>(you);
            </div>
            <div className="text-muted-foreground">
              {"// Start building something great_"}
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-border bg-secondary/70 px-4 py-2.5 font-mono text-[9px] text-muted-foreground">
          <span className="text-sdev-cyan">● ALL SYSTEMS READY</span>
          <span>TypeScript ✦ UTF-8</span>
        </div>
      </div>
      <div className="absolute top-6 left-0 flex items-center gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-bold shadow-lg sm:top-16 sm:-left-4">
        <span className="text-2xl text-sdev-cyan">✳</span>
        <span>
          React
          <small className="block text-[9px] font-normal text-muted-foreground">
            UI that scales
          </small>
        </span>
      </div>
      <div className="absolute right-0 bottom-10 flex items-center gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-bold shadow-lg sm:bottom-20">
        <Zap size={18} className="text-primary" />
        <span>
          Level up
          <small className="block text-[9px] font-normal text-muted-foreground">
            every day ↗
          </small>
        </span>
      </div>
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[8px] tracking-[0.14em] whitespace-nowrap text-muted-foreground sm:text-[9px]">
        <span className="h-px w-6 bg-primary" />
        YOUR NEXT CHAPTER STARTS HERE
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div
      id="top"
      className="relative overflow-hidden bg-background text-foreground selection:bg-primary/30"
    >
      <div
        className="pointer-events-none absolute -top-80 -right-40 size-[680px] rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <HomeHeader />
      <main>
        <PageShell as="section" size="wide" aria-labelledby="hero-title">
          <div className="relative grid items-center gap-3 py-13 min-[821px]:py-18 xl:min-h-[720px] xl:grid-cols-[1.05fr_0.8fr_0.76fr] xl:py-20">
            <div className="relative z-10 min-w-0">
              <div className="flex items-center gap-2.5 font-mono text-[8px] font-bold tracking-wider text-primary sm:text-[10px]">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/15">
                  <Sparkles size={14} />
                </span>
                NỀN TẢNG HỌC LẬP TRÌNH THỰC CHIẾN
                <span className="hidden h-px w-9 bg-primary sm:block" />
              </div>
              <h1
                id="hero-title"
                className="mt-6 mb-5 text-[clamp(45px,11.6vw,78px)] leading-[1.04] font-extrabold tracking-[-0.075em] min-[821px]:text-[clamp(55px,6vw,75px)] xl:text-[clamp(54px,5.5vw,86px)]"
              >
                Build skills.
                <br />
                <span className="bg-gradient-to-r from-primary via-sdev-pink to-sdev-cyan bg-clip-text text-transparent">
                  Ship the future.
                </span>
              </h1>
              <p className="max-w-[520px] text-sm leading-[1.8] text-muted-foreground sm:text-base">
                Học fullstack theo cách của người làm sản phẩm. Từ dòng code đầu
                tiên đến ứng dụng bạn tự hào đưa ra thế giới.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-7">
              <Link className={primaryLink} href="/courses">
                Khám phá khóa học <ArrowUpRight size={18} />
              </Link>
                <a
                  className="inline-flex items-center gap-3 rounded-sm text-[13px] font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  href="#lo-trinh"
                >
                  <span className="grid size-[34px] place-items-center rounded-full border border-primary/40 text-primary">
                    <Play size={13} fill="currentColor" />
                  </span>
                  Xem lộ trình
                </a>
              </div>
              <div className="mt-11 flex items-center gap-4 sm:mt-15">
                <div className="flex pl-2" aria-hidden="true">
                  {["AN", "MK", "HL", "+"].map((item, index) => (
                    <span
                      key={item}
                      className={`-ml-2 grid size-[35px] place-items-center rounded-full border-2 border-background text-[9px] font-extrabold ${index === 3 ? "bg-primary/25 text-primary" : "bg-gradient-to-br from-primary/70 to-secondary"}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <strong className="block text-[11px]">
                    Cùng xây dựng tương lai
                  </strong>
                  <small className="mt-1 block text-[10px] text-muted-foreground">
                    Một cộng đồng developer luôn tiến về phía trước
                  </small>
                </div>
              </div>
            </div>
            <div className="relative z-0 min-w-0 xl:-mx-12">
              <CodeWindow />
            </div>
            <div
              id="dang-nhap"
              className="relative z-10 mx-auto w-full max-w-[500px] scroll-mt-8 xl:max-w-none"
            >
              <LoginForm />
            </div>
          </div>
        </PageShell>
        <div
          className="overflow-hidden border-y border-border/70 bg-secondary/30"
          aria-label="Các công nghệ được giảng dạy"
        >
          <PageShell>
            <div className="flex min-h-[70px] flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 font-mono text-sm font-bold tracking-wide text-muted-foreground">
              {[
                "REACT",
                "NEXT.JS",
                "TYPESCRIPT",
                "NODE.JS",
                "POSTGRESQL",
                "DOCKER",
              ].map((item, index) => (
                <span className="flex items-center gap-8" key={item}>
                  {index > 0 && (
                    <i className="text-xs text-primary not-italic">✦</i>
                  )}
                  {item}
                </span>
              ))}
            </div>
          </PageShell>
        </div>
        <PageShell as="section" id="khoa-hoc">
          <div className="py-21 min-[821px]:py-30">
            <div className="mb-12 flex flex-col gap-5 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between">
              <div>
                <span className={kicker}>[ KHÁM PHÁ KHÓA HỌC ]</span>
                <h2 className={`${heading} mt-4`}>
                  Chọn kỹ năng.
                  <br />
                  <span className="text-primary">Mở tương lai.</span>
                </h2>
              </div>
              <p className="max-w-[340px] text-sm leading-[1.8] text-muted-foreground">
                Mỗi khóa học là một bước tiến rõ ràng trên hành trình trở thành
                developer toàn diện.
              </p>
            </div>
            <div className="grid gap-5 min-[821px]:grid-cols-3">
              {courses.map((course) => {
                const Icon = course.icon
                return (
                  <article
                    className="relative min-h-[385px] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-secondary/70 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl motion-reduce:transform-none min-[821px]:min-h-[425px]"
                    key={course.number}
                  >
                    <div
                      className={`relative z-10 flex justify-between font-mono text-[10px] font-bold tracking-[0.15em] ${course.accent}`}
                    >
                      <span>{course.tag}</span>
                      <span className="text-muted-foreground">
                        {course.number} / 03
                      </span>
                    </div>
                    <div
                      className={`relative z-10 mx-auto my-8 grid size-[78px] -rotate-6 place-items-center rounded-[19px] border ${course.iconStyle}`}
                    >
                      <Icon size={26} strokeWidth={1.6} />
                    </div>
                    <div className="relative z-10">
                      <span
                        className={`text-[10px] font-bold ${course.accent}`}
                      >
                        {course.level}
                      </span>
                      <h3 className="mt-2 mb-2 text-[22px] font-semibold tracking-[-0.04em]">
                        {course.title}
                      </h3>
                      <p className="max-w-80 text-xs leading-[1.65] text-muted-foreground">
                        {course.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2 pr-9">
                        {course.stack.map((item) => (
                          <span
                            className="rounded-md border border-border px-2 py-1.5 font-mono text-[10px] text-muted-foreground"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`/courses#${course.id}`}
                      className="absolute right-6 bottom-6 grid size-8 place-items-center rounded-full border border-border text-primary transition hover:rotate-45 hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none"
                      aria-label={`Tìm hiểu khóa ${course.title}`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </article>
                )
              })}
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <span className="text-lg text-primary">✳</span> Bắt đầu từ bất cứ
              đâu. Tiến xa theo cách của bạn.{" "}
            <Link
              className="ml-2 inline-flex items-center gap-1 font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              href="/courses"
            >
              Xem tất cả khóa học <ArrowRight size={15} />
            </Link>
            </div>
          </div>
        </PageShell>
        <section
          id="lo-trinh"
          className="border-y border-border/70 bg-secondary/30"
        >
          <PageShell>
            <div className="grid gap-12 py-21 min-[821px]:grid-cols-2 min-[821px]:gap-20 min-[821px]:py-28">
              <div>
                <span className={kicker}>[ CÁCH CHÚNG MÌNH DẠY ]</span>
                <h2 className={`${heading} mt-4 text-[clamp(38px,3.8vw,54px)]`}>
                  Không chỉ học code.
                  <br />
                  <span className="text-primary">Học cách tạo ra giá trị.</span>
                </h2>
                <p className="mt-6 mb-7 max-w-[470px] text-sm leading-[1.8] text-muted-foreground">
                  Không cần tìm mãi một điểm bắt đầu. SDEV đưa bạn từ kiến thức
                  nền tảng đến sản phẩm hoàn chỉnh với từng cột mốc rõ ràng.
                </p>
                <a
                  className="inline-flex items-center gap-3 rounded-sm text-[13px] font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  href="#dang-nhap"
                >
                  Bắt đầu hành trình <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="border-t border-border">
                {benefits.map((benefit) => (
                  <div
                    className="grid grid-cols-[36px_1fr_28px] items-start gap-4 border-b border-border py-6"
                    key={benefit.value}
                  >
                    <span className="mt-0.5 font-mono text-xs text-primary">
                      {benefit.value}
                    </span>
                    <div>
                      <h3 className="mb-2 text-[17px] font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="max-w-[370px] text-xs leading-[1.65] text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                    <span className="grid size-7 place-items-center rounded-full border border-primary/40 text-primary">
                      <Check size={17} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PageShell>
        </section>
        <PageShell as="section" id="ve-chung-toi">
          <div className="py-18 min-[821px]:py-25">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-secondary to-primary/15 px-5 py-16 text-center sm:px-8 sm:py-20">
              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
              <span className={kicker}>[ YOUR NEXT COMMIT ]</span>
              <h2 className="relative my-5 text-[clamp(39px,4.8vw,67px)] leading-[1.12] font-bold tracking-[-0.065em]">
                Ý tưởng lớn bắt đầu
                <br />
                từ <span className="text-primary">một dòng code.</span>
              </h2>
              <p className="relative text-sm text-muted-foreground">
                Đầu tư cho kỹ năng hôm nay. Tạo nên điều khác biệt ngày mai.
              </p>
              <a className={`${primaryLink} relative mt-5`} href="#dang-nhap">
                Bắt đầu với SDEV <ArrowUpRight size={18} />
              </a>
              <div className="absolute right-1/2 bottom-4 translate-x-1/2 font-mono text-[10px] whitespace-nowrap text-muted-foreground sm:right-6 sm:translate-x-0">
                &lt;future status=&quot;building&quot; /&gt;
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <HomeFooter />
    </div>
  )
}
