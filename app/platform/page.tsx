import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function Platform() {
  const inputData = ["Domain URL", "Brand name", "Primary keywords", "Target audience", "Existing content URLs"]

  const outputData = [
    "AI Visibility Score (0-100)",
    "EEAT Assessment",
    "Keyword coverage analysis",
    "Content recommendations",
    "Competitive benchmarks",
    "Action prioritization",
  ]

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">The AI-SEO Platform</h1>
            <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
              A purpose-built system to understand your brand through the lens of AI search. From data ingestion to
              actionable recommendations.
            </p>
          </div>
        </section>

        {/* Audit Pipeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">The Audit Pipeline</h2>

            <Tabs defaultValue="flow" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="flow">Pipeline Flow</TabsTrigger>
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
              </TabsList>

              <TabsContent value="flow" className="mt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-6 bg-muted rounded-lg border border-border">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">Input</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">InputAssembler</h3>
                      <p className="text-sm text-muted-foreground">Collects and validates brand and domain metadata</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-muted rounded-lg border border-border">
                    <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">Context</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">ContextPack</h3>
                      <p className="text-sm text-muted-foreground">
                        Enriches data with semantic and structural analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">7 Audit Modules</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Content Intelligence",
                        "Visibility Analysis",
                        "EEAT Scoring",
                        "Keyword Coverage",
                        "Competitive Landscape",
                        "Brand Safety",
                        "Recommendations Engine",
                      ].map((mod) => (
                        <div key={mod} className="p-3 bg-card rounded-lg border border-border text-sm">
                          {mod}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-muted rounded-lg border border-border">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">Output</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Results & Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Structured scores, insights, and recommendations</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="input" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Data We Consume</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {inputData.map((item) => (
                      <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="output" className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What Brands Receive</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {outputData.map((item) => (
                      <div key={item} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Differentiation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">How We Differ</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Traditional SEO Tools</th>
                    <th className="text-center py-4 px-4 font-semibold">Kasparro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "AI Search Visibility",
                      traditional: "No",
                      kasparro: "Yes",
                    },
                    {
                      feature: "LLM-Specific Metrics",
                      traditional: "No",
                      kasparro: "Yes",
                    },
                    {
                      feature: "Semantic Content Analysis",
                      traditional: "Partial",
                      kasparro: "Complete",
                    },
                    {
                      feature: "AI Platform Tracking",
                      traditional: "No",
                      kasparro: "Yes (ChatGPT, Gemini, Perplexity)",
                    },
                    {
                      feature: "EEAT Scoring",
                      traditional: "No",
                      kasparro: "Yes",
                    },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-border hover:bg-background transition">
                      <td className="py-4 px-4">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.traditional}</td>
                      <td className="py-4 px-4 text-center text-primary font-semibold">{row.kasparro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
