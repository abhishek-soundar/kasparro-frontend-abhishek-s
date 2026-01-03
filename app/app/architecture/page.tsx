import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, Database, Zap, BarChart3, Settings } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="ml-0 lg:ml-16 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
        <p className="text-muted-foreground">
          Understanding how Kasparro analyzes brands for AI-first search optimization.
        </p>
      </div>

      <Tabs defaultValue="flow" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="flex w-max min-w-full gap-2">
            <TabsTrigger value="flow" className="text-xs sm:text-sm whitespace-nowrap">
              Data Flow
            </TabsTrigger>
            <TabsTrigger value="components" className="text-xs sm:text-sm whitespace-nowrap">
              Components
            </TabsTrigger>
            <TabsTrigger value="modules" className="text-xs sm:text-sm whitespace-nowrap">
              Module Breakdown
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Data Flow */}
        <TabsContent value="flow" className="mt-8">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
              <div className="flex items-start gap-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">1. InputAssembler</h2>
                  <p className="text-muted-foreground mb-4">
                    Collects and validates brand metadata, domain information, and baseline data.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Inputs:</span>
                      <span className="text-muted-foreground"> Domain, brand name, industry, keywords</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Outputs:</span>
                      <span className="text-muted-foreground"> Validated brand profile, content URLs</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>

            <Card className="p-8 bg-gradient-to-r from-accent/5 to-transparent border-accent/20">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">2. ContextPack</h2>
                  <p className="text-muted-foreground mb-4">
                    Enriches data with semantic analysis, content structure evaluation, and AI platform metadata.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Processing:</span>
                      <span className="text-muted-foreground"> Semantic analysis, NLP, structural validation</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Outputs:</span>
                      <span className="text-muted-foreground">
                        {" "}
                        Enriched context data, semantic profiles, platform signals
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>

            <Card className="p-8">
              <h2 className="text-xl font-bold mb-6">3. Audit Modules (Parallel Processing)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Content Intelligence",
                  "Visibility Analysis",
                  "EEAT Scoring",
                  "Keyword Coverage",
                  "Competitive Landscape",
                  "Brand Safety",
                  "Recommendations Engine",
                ].map((mod, idx) => (
                  <div key={idx} className="p-4 bg-muted rounded-lg border border-border flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">{mod}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
              <div className="flex items-start gap-4">
                <Settings className="h-8 w-8 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">4. Output Surfaces</h2>
                  <p className="text-muted-foreground mb-4">
                    Results aggregated into structured dashboard, reports, and recommendations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Output Formats:</span>
                      <span className="text-muted-foreground">
                        {" "}
                        Dashboard UI, PDF reports, JSON API, email summaries
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Key Data:</span>
                      <span className="text-muted-foreground">
                        {" "}
                        Scores, insights, issues, prioritized recommendations
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="mt-8">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Core System Components</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Data Ingestion Layer",
                    desc: "Collects brand data, validates inputs, prepares for analysis",
                  },
                  {
                    name: "Semantic Analysis Engine",
                    desc: "Processes content through NLP, generates semantic representations",
                  },
                  {
                    name: "AI Platform Integration",
                    desc: "Monitors ChatGPT, Gemini, Perplexity for brand mentions and citations",
                  },
                  {
                    name: "Scoring Engine",
                    desc: "Calculates module-specific scores based on weighted metrics",
                  },
                  {
                    name: "Competitive Intelligence",
                    desc: "Benchmarks brand against competitors across AI visibility",
                  },
                  {
                    name: "Recommendation System",
                    desc: "Prioritizes actionable improvements by effort and impact",
                  },
                ].map((comp, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-muted rounded-lg border border-border">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{comp.name}</p>
                      <p className="text-sm text-muted-foreground">{comp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Module Breakdown */}
        <TabsContent value="modules" className="mt-8">
          <div className="space-y-4">
            {[
              {
                name: "Content Intelligence",
                purpose: "Evaluates content depth, structure, semantic coherence, and AI-readiness",
              },
              {
                name: "Visibility Analysis",
                purpose: "Tracks brand presence across ChatGPT, Gemini, Perplexity, and emerging AI platforms",
              },
              {
                name: "EEAT Scoring",
                purpose: "Measures Expertise, Experience, Authority, and Trust signals in content",
              },
              {
                name: "Keyword Coverage",
                purpose: "Analyzes non-branded keyword positioning and identifies coverage gaps",
              },
              {
                name: "Competitive Landscape",
                purpose: "Benchmarks visibility and content metrics against direct competitors in AI space",
              },
              {
                name: "Brand Safety",
                purpose: "Monitors brand mentions, sentiment, and protects against misinformation in AI outputs",
              },
              {
                name: "Recommendations Engine",
                purpose: "Generates prioritized, actionable recommendations based on all module findings",
              },
            ].map((mod, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{mod.name}</h3>
                    <p className="text-sm text-muted-foreground">{mod.purpose}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
