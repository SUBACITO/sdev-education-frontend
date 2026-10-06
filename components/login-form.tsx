"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import character from "@/app/(public)/banner/character.png"

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path fill="#4285F4" d="M21.35 12.22c0-.68-.06-1.36-.18-2.02H12v3.83h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.2Z" />
      <path fill="#34A853" d="M12 21.5c2.62 0 4.82-.87 6.43-2.35l-3.14-2.45c-.87.58-1.98.93-3.29.93-2.53 0-4.68-1.71-5.45-4H3.31v2.53A9.72 9.72 0 0 0 12 21.5Z" />
      <path fill="#FBBC05" d="M6.55 13.63a5.85 5.85 0 0 1 0-3.26V7.84H3.31a9.72 9.72 0 0 0 0 8.32l3.24-2.53Z" />
      <path fill="#EA4335" d="M12 6.37c1.38 0 2.62.48 3.6 1.42l2.84-2.84A9.14 9.14 0 0 0 12 2.5a9.72 9.72 0 0 0-8.69 5.34l3.24 2.53c.77-2.29 2.92-4 5.45-4Z" />
    </svg>
  )
}

export function LoginForm() {
  const [message, setMessage] = useState("")

  return (
    <div className="login-card">
      <div className="login-card-shine" />
      <div className="login-portrait" aria-hidden="true">
        <Image
          src={character}
          alt=""
          sizes="142px"
          priority
        />
      </div>
      <div className="login-brand-row">
        <span className="login-brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
        <span className="login-brand-name">SDEV<span>.</span><small>TEAM</small></span>
      </div>
      <div className="login-heading">
        <h2>Chào mừng trở lại</h2>
        <p>Đăng nhập để truy cập khóa học và tiếp tục hành trình của bạn.</p>
      </div>
      <button
        className="google-login"
        type="button"
        onClick={() => setMessage("Đăng nhập Google sẽ khả dụng khi kết nối hệ thống xác thực.")}
      >
        <GoogleIcon />
        <span>Đăng nhập với Google</span>
      </button>
      {message && <p className="form-message" role="status">{message}</p>}
      <div className="login-bottom">
        <span>Chưa sẵn sàng đăng nhập?</span>
        <a href="#khoa-hoc">Xem khóa học <ArrowRight size={14} /></a>
      </div>
    </div>
  )
}
