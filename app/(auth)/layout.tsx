import { CatalogFooter } from "@/components/catalog-footer"
import { CatalogHeader } from "@/components/catalog-header"

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <CatalogHeader />
      <div className="flex-1">{children}</div>
      <CatalogFooter />
    </div>
  )
}
