import brandData from "@/data/brands.json"
import modulesData from "@/data/audit-modules.json"
import type { Brand, AuditModule, OverallAudit } from "@/types/audit"

export function getBrands(): Brand[] {
  return brandData.brands.map((b: any) => ({
    ...b,
    lastAuditDate: new Date(b.lastAuditDate),
  }))
}

export function getBrandById(id: string): Brand | undefined {
  return getBrands().find((b) => b.id === id)
}

export function getAuditModules(): AuditModule[] {
  return modulesData.modules
}

export function getModuleById(id: string): AuditModule | undefined {
  return getAuditModules().find((m) => m.id === id)
}

export function getOverallAudit(brandId: string): OverallAudit {
  const modules = getAuditModules()
  const moduleScores = modules.map((m) => m.score.score)
  const avgScore = Math.round(moduleScores.reduce((a, b) => a + b, 0) / moduleScores.length)

  return {
    id: `audit-${brandId}`,
    brandId,
    createdAt: new Date("2025-01-20T10:30:00Z"),
    aiVisibilityScore: {
      score: 68,
      trend: "up",
      lastWeekChange: 4,
      status: "good",
    },
    trustScore: {
      score: 84,
      trend: "up",
      lastWeekChange: 8,
      status: "excellent",
    },
    keywordCoverageScore: {
      score: 71,
      trend: "stable",
      lastWeekChange: 1,
      status: "good",
    },
    modules,
  }
}
