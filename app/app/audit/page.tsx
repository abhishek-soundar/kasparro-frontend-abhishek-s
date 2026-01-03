"use client"

import { useReducer, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBrands, getOverallAudit, getModuleById, getAuditModules } from "@/lib/audit-data"
import { AlertCircle, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"

type AuditState = {
  selectedBrandId: string
  selectedModuleId: string
}

type AuditAction = { type: "SET_BRAND"; payload: string } | { type: "SET_MODULE"; payload: string }

function auditReducer(state: AuditState, action: AuditAction): AuditState {
  switch (action.type) {
    case "SET_BRAND":
      return { ...state, selectedBrandId: action.payload }
    case "SET_MODULE":
      return { ...state, selectedModuleId: action.payload }
    default:
      return state
  }
}

export default function AuditPage() {
  const brands = getBrands()
  const modules = getAuditModules()
  const searchParams = useSearchParams()

  const initialModuleId = searchParams.get("module") || modules[0]?.id || ""

  const [state, dispatch] = useReducer(auditReducer, {
    selectedBrandId: brands[0]?.id || "",
    selectedModuleId: initialModuleId,
  })

  const selectedBrand = useMemo(
    () => brands.find((b) => b.id === state.selectedBrandId)!,
    [brands, state.selectedBrandId],
  )

  const audit = useMemo(() => getOverallAudit(state.selectedBrandId), [state.selectedBrandId])

  const selectedModule = useMemo(() => getModuleById(state.selectedModuleId), [state.selectedModuleId])

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
    low: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200",
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <DashboardHeader
        brands={brands}
        selectedBrand={selectedBrand}
        onBrandChange={(brandId) => dispatch({ type: "SET_BRAND", payload: brandId })}
      />

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Module Selector - Sidebar */}
        <div className="lg:col-span-1 order-last lg:order-first">
          <div className="lg:sticky lg:top-24">
            <h3 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Modules</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 lg:space-y-2">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => dispatch({ type: "SET_MODULE", payload: module.id })}
                  className={`w-full text-left p-2.5 md:p-3 lg:p-2 lg:py-3 rounded-lg transition border-2 text-xs ${
                    state.selectedModuleId === module.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card border-border hover:border-primary text-foreground cursor-pointer"
                  }`}
                >
                  <p className="font-medium text-xs md:text-sm truncate">{module.name}</p>
                  <p
                    className={`text-xs mt-1 ${state.selectedModuleId === module.id ? "opacity-90" : "text-muted-foreground"}`}
                  >
                    {module.score.score}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Module Details - Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6 w-full gap-0">
              <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2">
                Overview
              </TabsTrigger>
              <TabsTrigger value="insights" className="text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2">
                Insights
              </TabsTrigger>
              <TabsTrigger value="issues" className="text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2">
                Issues
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2">
                Actions
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4 sm:mb-6">
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Module Score</p>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary break-words">
                      {selectedModule.score.score}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Status</p>
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold capitalize">
                      {selectedModule.score.status}
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-4 sm:pt-6">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedModule.description}
                  </p>
                </div>
              </Card>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights">
              <div className="space-y-3 sm:space-y-4">
                {selectedModule.keyInsights.map((insight, idx) => {
                  const statusColors = {
                    excellent: "border-green-200 dark:border-green-800",
                    good: "border-blue-200 dark:border-blue-800",
                    fair: "border-yellow-200 dark:border-yellow-800",
                    poor: "border-red-200 dark:border-red-800",
                  }

                  const statusIcons = {
                    excellent: <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />,
                    good: <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
                    fair: <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />,
                    poor: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />,
                  }

                  return (
                    <Card
                      key={idx}
                      className={`p-3 sm:p-4 lg:p-6 border-2 ${statusColors[insight.status]} hover:shadow-md transition`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                        {statusIcons[insight.status]}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base break-words">
                            {insight.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {insight.description}
                          </p>
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
                <Card className="p-4 sm:p-6 lg:p-8 text-center">
                  <CheckCircle2 className="h-10 sm:h-12 w-10 sm:w-12 text-green-600 dark:text-green-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg font-semibold">No issues detected</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">This module is performing well.</p>
                </Card>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {selectedModule.issues.map((issue, idx) => (
                    <Card
                      key={idx}
                      className={`p-3 sm:p-4 lg:p-6 border-2 ${severityColors[issue.severity]} hover:shadow-md transition`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-1 sm:mb-2 gap-1">
                            <h3 className="font-semibold text-xs sm:text-sm lg:text-base break-words">{issue.title}</h3>
                            <span className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-opacity-30 capitalize whitespace-nowrap w-fit">
                              {issue.severity}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm leading-relaxed">{issue.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations">
              <div className="space-y-3 sm:space-y-4">
                {selectedModule.recommendations.length === 0 ? (
                  <Card className="p-4 sm:p-6 lg:p-8 text-center">
                    <CheckCircle2 className="h-10 sm:h-12 w-10 sm:w-12 text-green-600 dark:text-green-400 mx-auto mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg font-semibold">No recommendations</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">This module is in excellent shape.</p>
                  </Card>
                ) : (
                  selectedModule.recommendations.map((rec, idx) => (
                    <Card key={idx} className="p-3 sm:p-4 lg:p-6 border border-border hover:shadow-md transition">
                      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3">
                        <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                          <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm lg:text-base break-words">
                              {rec.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {rec.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <span
                            className={`text-xs px-2 py-1 rounded-full whitespace-nowrap font-medium ${priorityBadgeColors[rec.priority]}`}
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
                      </div>
                      <div className="flex items-center gap-2 pt-2 sm:pt-3 border-t border-border">
                        <TrendingUp className="h-4 w-4 text-muted-foreground flex-shrink-0" />
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
