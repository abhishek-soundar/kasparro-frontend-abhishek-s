import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">About Kasparro</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              We're building the essential intelligence layer for brands in the AI-first search era.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              The search landscape is fundamentally changing. ChatGPT, Google Gemini, Perplexity, and emerging AI
              platforms are replacing traditional search behavior. Yet most brands still optimize for 20th-century SEO
              patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We help forward-thinking brands understand and optimize for how AI systems understand, rank, and present
              their information. We're not building another SEO tool. We're building the intelligence layer for the next
              era of search.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Our Philosophy</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Data Integrity</h3>
                <p className="text-muted-foreground">
                  We prioritize accuracy over noise. Every metric, score, and recommendation is grounded in verifiable
                  data about how AI systems actually behave.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Clarity Over Complexity</h3>
                <p className="text-muted-foreground">
                  The dashboard is designed for brand leaders, not just SEO specialists. Insights are presented in plain
                  language with clear action items.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Actionable Intelligence</h3>
                <p className="text-muted-foreground">
                  We don't just measure. We recommend. Every score comes with a prioritized list of actions you can take
                  to improve performance.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">Continuous Evolution</h3>
                <p className="text-muted-foreground">
                  AI platforms change rapidly. Our system continuously adapts to new LLM behaviors, retrieval patterns,
                  and ranking signals.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              In five years, every brand will have an AI-SEO strategy. Tools like Kasparro will be as essential to
              marketing teams as Google Analytics is today. We're building that future, one audit at a time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
