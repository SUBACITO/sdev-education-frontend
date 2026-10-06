import { ArrowRight, ArrowUpRight, Check, Code2, Layers3, Play, Sparkles, Terminal, Zap } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

const courses = [
  { number: "01", tag: "FRONTEND", level: "Cơ bản → Nâng cao", title: "Frontend Engineering", description: "Từ giao diện đầu tiên đến trải nghiệm web khiến người dùng muốn ở lại.", stack: ["React", "Next.js", "TypeScript"], color: "violet", icon: Layers3 },
  { number: "02", tag: "BACKEND", level: "Thực chiến", title: "Backend & System Design", description: "Thiết kế API, dữ liệu và kiến trúc vững chắc cho sản phẩm thật.", stack: ["Node.js", "PostgreSQL", "Docker"], color: "cyan", icon: Terminal },
  { number: "03", tag: "FULLSTACK", level: "Từ A đến Z", title: "The Fullstack Path", description: "Kết nối mọi mảnh ghép để tự tin xây dựng và triển khai ứng dụng.", stack: ["Next.js", "Prisma", "Cloud"], color: "pink", icon: Code2 },
]

const benefits = [
  { value: "01", title: "Học đúng thứ cần dùng", description: "Nội dung bám sát công việc hằng ngày của developer, không lan man lý thuyết." },
  { value: "02", title: "Làm dự án thật", description: "Mỗi chặng đều có sản phẩm để bạn áp dụng kiến thức và đưa vào portfolio." },
  { value: "03", title: "Đi cùng cộng đồng", description: "Học hỏi, chia sẻ và giữ nhịp tiến bộ cùng những người có chung mục tiêu." },
]

function Brand() {
  return <a className="brand" href="#top" aria-label="SDEV Team - về đầu trang"><span className="brand-mark"><span/><span/><span/><span/></span><span>SDEV<span className="brand-dot">.</span><small>TEAM</small></span></a>
}

export default function Page() {
  return (
    <div id="top" className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header container">
        <Brand />
        <nav className="desktop-nav" aria-label="Điều hướng chính"><a href="#khoa-hoc">Khóa học</a><a href="#lo-trinh">Lộ trình</a><a href="#ve-chung-toi">Về SDEV</a></nav>
        <div className="header-actions"><ThemeToggle /><a className="header-cta" href="#dang-nhap">Bắt đầu học <ArrowUpRight size={16} /></a></div>
        <details className="mobile-nav"><summary aria-label="Mở menu"><span/><span/><span/></summary><nav aria-label="Điều hướng di động"><a href="#khoa-hoc">Khóa học</a><a href="#lo-trinh">Lộ trình</a><a href="#ve-chung-toi">Về SDEV</a><a href="#dang-nhap">Đăng nhập</a></nav></details>
      </header>
      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-spark"><Sparkles size={14}/></span> NỀN TẢNG HỌC LẬP TRÌNH THỰC CHIẾN <span className="eyebrow-line"/></div>
            <h1 id="hero-title">Build skills.<br/><span>Ship the future.</span></h1>
            <p className="hero-lead">Học fullstack theo cách của người làm sản phẩm. Từ dòng code đầu tiên đến ứng dụng bạn tự hào đưa ra thế giới.</p>
            <div className="hero-actions"><a className="button-primary" href="#khoa-hoc">Khám phá khóa học <ArrowUpRight size={18}/></a><a className="button-ghost" href="#lo-trinh"><span className="play-ring"><Play size={13} fill="currentColor"/></span> Xem lộ trình</a></div>
            <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>AN</span><span>MK</span><span>HL</span><span>+</span></div><div><strong>Cùng xây dựng tương lai</strong><small>Một cộng đồng developer luôn tiến về phía trước</small></div></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-glow"/>
            <div className="code-window" aria-label="Minh họa trình soạn thảo code">
              <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span><Code2 size={13}/> your-future.tsx</span><span className="window-plus">+</span></div>
              <div className="code-body"><div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08</div><div className="code-lines"><div><span className="syntax-purple">const</span> <span className="syntax-blue">you</span> = {"{"}</div><div className="indent">passion: <span className="syntax-green">true</span>,</div><div className="indent">skills: <span className="syntax-yellow">{'["frontend", "backend"]'}</span>,</div><div className="indent">potential: <span className="syntax-purple">Infinity</span></div><div>{"};"}</div><div className="code-blank">&nbsp;</div><div><span className="syntax-purple">await</span> <span className="syntax-blue">buildYourFuture</span>(you);</div><div><span className="syntax-muted">{"// Start building something great_"}</span></div></div></div>
              <div className="window-footer"><span><span className="status-dot"/> ALL SYSTEMS READY</span><span>TypeScript&nbsp; ✦ &nbsp;UTF-8</span></div>
            </div>
            <div className="floating-chip chip-react"><span className="chip-icon">✳</span><span>React<br/><small>UI that scales</small></span></div>
            <div className="floating-chip chip-rocket"><Zap size={18} fill="currentColor"/><span>Level up<br/><small>every day ↗</small></span></div>
            <div className="visual-caption"><span className="caption-line"/> YOUR NEXT CHAPTER STARTS HERE</div>
          </div>
          <div id="dang-nhap" className="login-position"><LoginForm /></div>
        </section>
        <div className="ticker" aria-label="Các công nghệ được giảng dạy"><div className="ticker-track"><span>REACT</span><i>✦</i><span>NEXT.JS</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>POSTGRESQL</span><i>✦</i><span>DOCKER</span><i>✦</i><span>REACT</span><i>✦</i><span>NEXT.JS</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>NODE.JS</span><i>✦</i></div></div>
        <section id="khoa-hoc" className="courses-section section-container"><div className="section-heading"><div><span className="section-kicker">[ KHÁM PHÁ KHÓA HỌC ]</span><h2>Chọn kỹ năng.<br/><em>Mở tương lai.</em></h2></div><p>Mỗi khóa học là một bước tiến rõ ràng trên hành trình trở thành developer toàn diện.</p></div><div className="course-grid">{courses.map((course) => { const Icon = course.icon; return <article className={`course-card course-${course.color}`} key={course.number}><div className="card-top"><span>{course.tag}</span><span>{course.number} / 03</span></div><div className="course-icon"><Icon size={26} strokeWidth={1.6}/></div><div className="course-content"><span className="course-level">{course.level}</span><h3>{course.title}</h3><p>{course.description}</p><div className="stack-list">{course.stack.map(item => <span key={item}>{item}</span>)}</div></div><a href="#dang-nhap" className="course-link" aria-label={`Tìm hiểu khóa ${course.title}`}><ArrowUpRight size={19}/></a></article>})}</div><div className="course-note"><span className="note-star">✳</span> Bắt đầu từ bất cứ đâu. Tiến xa theo cách của bạn. <a href="#dang-nhap">Tham gia ngay <ArrowRight size={15}/></a></div></section>
        <section id="lo-trinh" className="path-section"><div className="section-container path-layout"><div className="path-copy"><span className="section-kicker">[ CÁCH CHÚNG MÌNH DẠY ]</span><h2>Không chỉ học code.<br/><em>Học cách tạo ra giá trị.</em></h2><p>Không cần tìm mãi một điểm bắt đầu. SDEV đưa bạn từ kiến thức nền tảng đến sản phẩm hoàn chỉnh với từng cột mốc rõ ràng.</p><a className="text-link" href="#dang-nhap">Bắt đầu hành trình <ArrowUpRight size={18}/></a></div><div className="benefit-list">{benefits.map((benefit) => <div className="benefit" key={benefit.value}><span className="benefit-number">{benefit.value}</span><div><h3>{benefit.title}</h3><p>{benefit.description}</p></div><span className="benefit-check"><Check size={17}/></span></div>)}</div></div></section>
        <section id="ve-chung-toi" className="closing-section section-container"><div className="closing-glow"/><span className="section-kicker">[ YOUR NEXT COMMIT ]</span><h2>Ý tưởng lớn bắt đầu<br/>từ <span>một dòng code.</span></h2><p>Đầu tư cho kỹ năng hôm nay. Tạo nên điều khác biệt ngày mai.</p><a className="button-primary" href="#dang-nhap">Bắt đầu với SDEV <ArrowUpRight size={18}/></a><div className="closing-code">&lt;future status=&quot;building&quot; /&gt;</div></section>
      </main>
      <footer className="site-footer section-container"><Brand/><p>Learn. Build. Become.</p><div><a href="#khoa-hoc">Khóa học</a><a href="#lo-trinh">Lộ trình</a></div><span>© 2026 SDEV Team</span></footer>
    </div>
  )
}
