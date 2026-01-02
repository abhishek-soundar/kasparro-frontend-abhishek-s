"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"
import type { AuditScore, AuditStatus } from "@/types/audit"

interface ScoreCardProps {
  label: string
  score: AuditScore
}

export function ScoreCard({ label, score }: ScoreCardProps) {
  const statusColors: Record<AuditStatus, string> = {
    excellent: "text-green-600 dark:text-green-400",
    good: "text-blue-600 dark:text-blue-400",
    fair: "text-yellow-600 dark:text-yellow-400",
    poor: "text-red-600 dark:text-red-400",
  }

  const bgColors: Record<AuditStatus, string> = {
    excellent: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    good: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    fair: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
    poor: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
  }

  return (
    <Card className={`p-6 ${bgColors[score.status]} border-2`}>
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div className="flex items-baseline gap-3 mb-3">
        <span className={`text-4xl font-bold ${statusColors[score.status]}`}>{score.score}</span>
        <span className="text-xs text-muted-foreground">/100</span>
      </div>
      <div className="flex items-center gap-2">
        {score.trend === "up" ? (
          <>
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-xs text-green-600 dark:text-green-400">+{score.lastWeekChange} this week</span>
          </>
        ) : score.trend === "down" ? (
          <>
            <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
            <span className="text-xs text-red-600 dark:text-red-400">{score.lastWeekChange} this week</span>
          </>
        ) : (
          <span className="text-xs text-muted-foreground">Stable</span>
        )}
      </div>
    </Card>
  )
}
