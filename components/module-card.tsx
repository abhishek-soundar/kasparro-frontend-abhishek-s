"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { AuditModule, AuditStatus } from "@/types/audit"

interface ModuleCardProps {
  module: AuditModule
  isSelected?: boolean
}

export function ModuleCard({ module, isSelected }: ModuleCardProps) {
  const statusColors: Record<AuditStatus, string> = {
    excellent: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20",
    good: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20",
    fair: "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20",
    poor: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20",
  }

  const statusTextColors: Record<AuditStatus, string> = {
    excellent: "text-green-700 dark:text-green-300",
    good: "text-blue-700 dark:text-blue-300",
    fair: "text-yellow-700 dark:text-yellow-300",
    poor: "text-red-700 dark:text-red-300",
  }

  if (isSelected) {
    return (
      <Card className={`p-4 border-2 cursor-pointer hover:shadow-md transition ${statusColors[module.score.status]}`}>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{module.name}</h3>
        <div className={`text-3xl font-bold ${statusTextColors[module.score.status]}`}>{module.score.score}</div>
        <p className={`text-xs mt-2 ${statusTextColors[module.score.status]}`}>
          {module.score.status.charAt(0).toUpperCase() + module.score.status.slice(1)}
        </p>
      </Card>
    )
  }

  return (
    <Link href={`/app/audit?module=${module.id}`}>
      <Card className={`p-4 border-2 cursor-pointer hover:shadow-md transition ${statusColors[module.score.status]}`}>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{module.name}</h3>
        <div className={`text-3xl font-bold ${statusTextColors[module.score.status]}`}>{module.score.score}</div>
        <p className={`text-xs mt-2 ${statusTextColors[module.score.status]}`}>
          {module.score.status.charAt(0).toUpperCase() + module.score.status.slice(1)}
        </p>
      </Card>
    </Link>
  )
}
