"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ScoreCard } from "@/components/score-card"
import { ModuleCard } from "@/components/module-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBrands, getOverallAudit } from "@/lib/audit-data"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const brands = getBrands()
  const [selectedBrandId, setSelectedBrandId] = useState(brands[0].id)

  const selectedBrand = brands.find((b) => b.id === selectedBrandId)!
  const audit = getOverallAudit(selectedBrandId)

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <DashboardHeader brands={brands} selectedBrand={selectedBrand} onBrandChange={setSelectedBrandId} />

      {/* Key Metrics - responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScoreCard label="AI Visibility Score" score={audit.aiVisibilityScore} />
        <ScoreCard label="Trust & EEAT Score" score={audit.trustScore} />
        <ScoreCard label="Keyword Coverage" score={audit.keywordCoverageScore} />
      </div>

      {/* Audit Info Card */}
      <Card className="p-6 bg-muted border-border hover:shadow-md transition">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Last Audit</p>
              <p className="font-semibold">
                {audit.createdAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
          <Link href="/app/audit">
            <Button className="w-full sm:w-auto hover:shadow-md transition">
              View Full Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Card>

      {/* Modules Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Audit Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {audit.modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  )
}
