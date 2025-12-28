import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap, Brain, BarChart3, CheckCircle2 } from "lucide-react"

export default function Home() {
  const modules = [
    { title: "Content Intelligence", description: "Analyze content quality and AI-readiness" },
    { title: "Visibility Analysis", description: "Track presence across AI search platforms" },
    { title: "EEAT Scoring", description: "Evaluate Expertise, Experience, Authority, Trust" },
    { title: "Keyword Coverage", description: "Non-branded keyword positioning analysis" },
    { title: "Competitive Landscape", description: "Benchmark against AI-era competitors" },
    { title: "Brand Safety", description: "Monitor brand mentions and sentiment" },
    { title: "Recommendations Engine", description: "Actionable optimization opportunities" },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">
                  Optimize for <span className="text-primary">AI-First Search</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Kasparro helps brands understand and optimize for ChatGPT, Gemini, Perplexity, and the AI-first search
                  era. In under 10 seconds, see how your brand performs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/app/dashboard">
                    <Button size="lg" className="w-full sm:w-auto hover:shadow-lg transition">
                      Run AI-SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/platform">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent hover:bg-muted transition"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                    <p className="text-sm text-muted-foreground">AI Search Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... existing sections ... */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why AI-SEO is Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Traditional SEO optimizes for Googlebot. AI-SEO optimizes for how LLMs understand, rank, and present
                information.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg hover:border-primary transition">
                <Zap className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Retrieval Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  AI models fetch information differently than search engines. Visibility requirements have shifted.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:border-primary transition">
                <Brain className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Semantic Depth</h3>
                <p className="text-sm text-muted-foreground">
                  Content credibility and semantic coherence matter more than keyword density.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:border-primary transition">
                <BarChart3 className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Measurable Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Track brand visibility across ChatGPT, Gemini, Perplexity, and emerging AI platforms.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">7 Core Audit Modules</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analysis across every dimension of AI-native brand performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((module, idx) => (
                <Card key={idx} className="p-6 hover:border-primary hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Kasparro Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple input, intelligent processing, actionable output.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Card className="flex-1 p-8 text-center hover:shadow-md transition">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Input</h3>
                <p className="text-sm text-muted-foreground">Provide your domain and key brand information.</p>
              </Card>
              <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
              <Card className="flex-1 p-8 text-center hover:shadow-md transition">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Analysis</h3>
                <p className="text-sm text-muted-foreground">7 modules evaluate brand performance across AI.</p>
              </Card>
              <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
              <Card className="flex-1 p-8 text-center hover:shadow-md transition">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Insights</h3>
                <p className="text-sm text-muted-foreground">Get scores, recommendations, and action items.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Optimize for AI?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your free AI-SEO audit today and understand how your brand appears to AI search engines.
            </p>
            <Link href="/app/dashboard">
              <Button size="lg" className="hover:shadow-lg transition">
                Run Audit Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
