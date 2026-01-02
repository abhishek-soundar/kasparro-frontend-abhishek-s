# Kasparro: AI-Native Brand & SEO Intelligence Platform

> Optimize your brand for the AI-first search era—understand how you appear to ChatGPT, Gemini, and Perplexity.

## Overview

Kasparro is a purpose-built platform for measuring and improving brand visibility across AI search engines. It evaluates your content through 7 specialized audit modules, each designed to assess AI-specific ranking factors like semantic coherence, entity clarity, and LLM retrievability.

## Features

- **7 Core Audit Modules**: Comprehensive analysis of content intelligence, visibility, EEAT scoring, keyword coverage, competitive landscape, brand safety, and recommendations
- **AI-First Metrics**: Track visibility across ChatGPT, Gemini, Perplexity, and emerging AI platforms
- **Semantic Analysis**: Evaluate content clarity, entity relationships, and LLM retrievability
- **Actionable Recommendations**: Prioritized optimization suggestions with estimated impact
- **Dark/Light Mode**: Full theme support for optimal viewing in any environment

## Architecture

Kasparro uses an 8-layer pipeline:

1. **Input Assembler** – Validates brand metadata and domain information
2. **Context Pack** – Enriches data with semantic and structural analysis
3. **7 Audit Modules** – Specialized evaluators across different dimensions
4. **Output Layer** – Generates scores, insights, issues, and recommendations
5. **Dashboard** – Real-time visualization of audit results
6. **State Management** – Zustand-backed audit state with memoized selectors
7. **Theme System** – CSS variables with dark/light mode via next-themes
8. **Data Layer** – Mock JSON data mirrored after a future API-backed system

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with semantic design tokens
- **State**: Zustand + useReducer patterns
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kasparro.git
cd kasparro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel, Netlify, or your preferred hosting platform.

## Project Structure

```
kasparro/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── platform/page.tsx    # Platform features & architecture
│   ├── about/page.tsx       # About page
│   └── app/                 # Protected dashboard routes
│       ├── dashboard/       # Main audit dashboard
│       ├── audit/          # Detailed module insights
│       └── architecture/   # System architecture page
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Header with theme toggle
│   ├── footer.tsx          # Footer
│   ├── score-card.tsx      # Metric display cards
│   └── module-card.tsx     # Audit module cards
├── lib/                     # Utilities & helpers
│   ├── audit-data.ts       # Data fetching functions
│   └── store.ts            # Zustand state management
├── types/                   # TypeScript interfaces
│   └── audit.ts            # Core domain types
├── data/                    # Mock data (JSON)
│   ├── brands.json         # Brand catalog
│   └── audit-modules.json  # Module definitions & scores
└── styles/                  # Global styles
    └── globals.css         # Tailwind config & design tokens
```

## Data & API

### Mock Data Structure

The application uses **JSON-based mock data** that mirrors a future API-backed system. This design allows for seamless transition to a real backend:

- **`data/brands.json`**: Brands with metadata (domain, industry, target audience)
- **`data/audit-modules.json`**: 7 audit modules with scores, insights, issues, and recommendations

All data access flows through typed functions in `lib/audit-data.ts`, making it trivial to swap JSON data sources for API calls without changing component logic.

### Data Functions

```typescript
// Get all brands
getBrands(): Brand[]

// Get a specific brand
getBrandById(id: string): Brand | undefined

// Get all audit modules
getAuditModules(): AuditModule[]

// Get a specific module
getModuleById(id: string): AuditModule | undefined

// Get overall audit for a brand
getOverallAudit(brandId: string): OverallAudit
```

## State Management

Dashboard and audit page state is managed via **Zustand + useReducer**:

```typescript
// Audit page reducer pattern
const [state, dispatch] = useReducer(auditReducer, initialState)

// Actions
dispatch({ type: 'SET_BRAND', payload: brandId })
dispatch({ type: 'SET_MODULE', payload: moduleId })
```

Memoized selectors prevent unnecessary re-renders and provide clean component interfaces.

## Styling & Theme

The design system uses **semantic CSS variables** defined in `app/globals.css`:

```css
--primary: Deep indigo (#4F46E5)
--accent: Cyan (#06B6D4)
--background: White / Near-black (dark mode)
--foreground: Near-black / White (dark mode)
```

Toggle dark/light mode via the sun/moon icon in the navigation header.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes with clear messages
4. Push to the branch
5. Open a pull request

## License

MIT License – See LICENSE file for details

## Questions?

For issues, questions, or feedback, please open a GitHub issue or reach out to the team.

---

**Built with ❤️ for AI-native brands optimizing the future of search.**
