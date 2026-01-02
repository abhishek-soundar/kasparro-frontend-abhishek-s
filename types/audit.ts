export type AuditStatus = "excellent" | "good" | "fair" | "poor"
export type TrendDirection = "up" | "down" | "stable"
export type IssueSeverity = "critical" | "high" | "medium" | "low"
export type RecommendationPriority = "critical" | "high" | "medium" | "low"

export interface Brand {
  id: string
  name: string
  domain: string
  description: string
  industry: string
  targetAudience: string
  lastAuditDate: Date
}

export interface AuditScore {
  score: number
  trend: TrendDirection
  lastWeekChange: number
  status: AuditStatus
}

export interface ModuleInsight {
  title: string
  description: string
  status: AuditStatus
}

export interface AuditModule {
  id: string
  name: string
  description: string
  icon: string
  score: AuditScore
  keyInsights: ModuleInsight[]
  issues: {
    title: string
    severity: IssueSeverity
    description: string
  }[]
  recommendations: {
    title: string
    description: string
    priority: RecommendationPriority
    estimatedImpact: string
  }[]
}

export interface OverallAudit {
  id: string
  brandId: string
  createdAt: Date
  aiVisibilityScore: AuditScore
  trustScore: AuditScore
  keywordCoverageScore: AuditScore
  modules: AuditModule[]
}

export interface ArchitectureComponent {
  name: string
  description: string
  inputs: string[]
  outputs: string[]
}

export interface SystemArchitecture {
  inputAssembler: ArchitectureComponent
  contextPack: ArchitectureComponent
  modules: ArchitectureComponent[]
  outputSurfaces: ArchitectureComponent
}
