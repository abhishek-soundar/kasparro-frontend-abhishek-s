"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBrands, getOverallAudit, getModuleById } from "@/lib/audit-data"
import { AlertCircle, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"

export default function AuditPage() {
  const brands = getBrands()
  const searchParams = useSearchParams()
  const [selectedBrandId, setSelectedBrandId] = useState(brands[0].id)

  const selectedBrand = brands.find((b) => b.id === selectedBrandId)!
  const audit = getOverallAudit(selectedBrandId)

  const moduleId = searchParams.get("module") || audit.modules[0].id
  const selectedModule = getModuleById(moduleId)

  if (!selectedModule) {
    return <div>Module not found</div>
  }

  const severityColors = {
    critical: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    high: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200",
    medium:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    low: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
  }

  const priorityBadgeColors = {
    critical: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    high: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    low: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <DashboardHeader brands={brands} selectedBrand={selectedBrand} onBrandChange={setSelectedBrandId} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Module Selector - Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Modules</h3>
            <div className="space-y-2">
              {audit.modules.map((module) => (
                <a
                  key={module.id}
                  href={`?module=${module.id}`}
                  className={`block p-3 rounded-lg transition border-2 ${
                    moduleId === module.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card border-border hover:border-primary text-foreground cursor-pointer"
                  }`}
                >
                  <p className="text-sm font-medium">{module.name}</p>
                  <p className={`text-xs mt-1 ${moduleId === module.id ? "opacity-90" : "text-muted-foreground"}`}>
                    Score: {module.score.score}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Module Details - Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="recommendations">Actions</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card className="p-8">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Module Score</p>
                    <div className="text-5xl font-bold text-primary">{selectedModule.score.score}</div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-2">Status</p>
                    <p className="text-2xl font-semibold capitalize">{selectedModule.score.status}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-muted-foreground">{selectedModule.description}</p>
                </div>
              </Card>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights">
              <div className="space-y-4">
                {selectedModule.keyInsights.map((insight, idx) => {
                  const statusColors = {
                    excellent: "border-green-200 dark:border-green-800",
                    good: "border-blue-200 dark:border-blue-800",
                    fair: "border-yellow-200 dark:border-yellow-800",
                    poor: "border-red-200 dark:border-red-800",
                  }

                  const statusIcons = {
                    excellent: <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />,
                    good: <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
                    fair: <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
                    poor: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />,
                  }

                  return (
                    <Card
                      key={idx}
                      className={`p-6 border-2 ${statusColors[insight.status]} hover:shadow-md transition`}
                    >
                      <div className="flex items-start gap-4">
                        {statusIcons[insight.status]}
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{insight.title}</h3>
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Issues Tab */}
            <TabsContent value="issues">
              {selectedModule.issues.length === 0 ? (
                <Card className="p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold">No issues detected</p>
                  <p className="text-sm text-muted-foreground">This module is performing well.</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {selectedModule.issues.map((issue, idx) => (
                    <Card
                      key={idx}
                      className={`p-6 border-2 ${severityColors[issue.severity]} hover:shadow-md transition`}
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{issue.title}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-opacity-30 capitalize">
                              {issue.severity}
                            </span>
                          </div>
                          <p className="text-sm">{issue.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations">
              <div className="space-y-4">
                {selectedModule.recommendations.length === 0 ? (
                  <Card className="p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold">No recommendations</p>
                    <p className="text-sm text-muted-foreground">This module is in excellent shape.</p>
                  </Card>
                ) : (
                  selectedModule.recommendations.map((rec, idx) => (
                    <Card key={idx} className="p-6 border border-border hover:shadow-md transition">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold mb-1">{rec.title}</h3>
                            <p className="text-sm text-muted-foreground">{rec.description}</p>
                          </div>
                        </div>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap font-medium ${priorityBadgeColors[rec.priority]}`}
                        >
                          {rec.priority === "critical"
                            ? "Critical"
                            : rec.priority === "high"
                              ? "High"
                              : rec.priority === "medium"
                                ? "Medium"
                                : "Low"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-3 border-t border-border">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">Estimated impact: {rec.estimatedImpact}</p>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
