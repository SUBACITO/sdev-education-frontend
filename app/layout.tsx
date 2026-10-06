import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SDEV Team — Học fullstack, xây tương lai",
  description: "Khóa học lập trình fullstack thực chiến cho developer. Học frontend, backend và xây dựng sản phẩm thật cùng SDEV Team.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
