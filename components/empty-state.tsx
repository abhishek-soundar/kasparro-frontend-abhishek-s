import type React from "react"
import { Card } from "@/components/ui/card"

interface EmptyStateProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <Card className="p-12 text-center bg-muted border-border">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <p className="text-lg font-semibold mb-2">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}
