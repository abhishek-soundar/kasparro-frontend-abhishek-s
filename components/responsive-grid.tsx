import type React from "react"

interface ResponsiveGridProps {
  children: React.ReactNode
  cols?: {
    sm?: number
    md?: number
    lg?: number
  }
}

export function ResponsiveGrid({ children, cols = { sm: 1, md: 2, lg: 3 } }: ResponsiveGridProps) {
  const gridClass = `grid gap-6 grid-cols-${cols.sm || 1} md:grid-cols-${cols.md || 2} lg:grid-cols-${cols.lg || 3}`

  return (
    <div
      className={`grid gap-6 ${cols.sm ? `grid-cols-${cols.sm}` : "grid-cols-1"} ${cols.md ? `md:grid-cols-${cols.md}` : "md:grid-cols-2"} ${cols.lg ? `lg:grid-cols-${cols.lg}` : "lg:grid-cols-3"}`}
    >
      {children}
    </div>
  )
}
