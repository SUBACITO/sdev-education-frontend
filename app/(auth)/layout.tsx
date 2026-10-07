import { AuthFooter } from "@/components/layout/auth-footer"
import { AuthHeader } from "@/components/layout/auth-header"

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <AuthHeader />
      <div className="flex-1">{children}</div>
      <AuthFooter />
    </div>
  )
}
