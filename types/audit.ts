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
  trend: "up" | "down" | "stable"
  lastWeekChange: number
  status: "excellent" | "good" | "fair" | "poor"
}

export interface ModuleInsight {
  title: string
  description: string
  status: "excellent" | "good" | "fair" | "poor"
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
    severity: "critical" | "high" | "medium" | "low"
    description: string
  }[]
  recommendations: {
    title: string
    description: string
    priority: "critical" | "high" | "medium" | "low"
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
