"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Layout, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ClientAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <nav className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/app/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold hidden sm:inline">Kasparro Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/">
              <Button variant="outline" size="sm">
                ← Website
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-full sm:w-64 border-r border-border bg-card min-h-[calc(100vh-64px)] sticky top-16">
          <nav className="p-4 space-y-2">
            <Link
              href="/app/dashboard"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive("/app/dashboard") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <Layout className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              href="/app/audit"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive("/app/audit") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">Audit</span>
            </Link>
            <Link
              href="/app/architecture"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive("/app/architecture") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <Zap className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">Architecture</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-64px)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
