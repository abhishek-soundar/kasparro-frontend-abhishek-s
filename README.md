# Kasparro - AI-Native SEO & Brand Intelligence Platform

A sophisticated, enterprise-grade SaaS platform for comprehensive SEO audits, brand visibility analysis, and strategic keyword intelligence. Built with cutting-edge web technologies and designed with a professional, data-focused interface.

![Kasparro Platform](https://via.placeholder.com/1200x630?text=Kasparro+AI-SEO+Platform)

## Features

- **Comprehensive SEO Audits** - 7 specialized audit modules analyzing different aspects of your digital presence
- **AI-Powered Insights** - Machine learning-driven recommendations and actionable intelligence
- **Brand Visibility Tracking** - Monitor your AI Visibility, Trust/EEAT scores, and keyword coverage
- **Architecture Insights** - Understand your website's technical structure and optimization opportunities
- **Real-Time Analytics** - Dashboard with live metrics and trend indicators
- **Dark/Light Mode Toggle** - Professional theme switching with persistent user preference
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Professional UI Components** - Enterprise-grade components with smooth animations and interactions

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with enhanced hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **next-themes** - Dark mode support with persistence
- **Zustand** - Lightweight state management

### Development Tools
- **ESLint** - Code quality and consistency
- **Turbopack** - Fast bundling (default in Next.js 16)
- **shadcn/ui** - High-quality React components

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/kasparro.git
   cd kasparro
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
kasparro/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with theme provider
│   ├── globals.css           # Global styles and design tokens
│   ├── platform/
│   │   └── page.tsx          # Platform features page
│   ├── about/
│   │   └── page.tsx          # About page
│   └── app/                  # Protected dashboard routes
│       ├── layout.tsx        # Dashboard layout
│       ├── ClientAppLayout.tsx
│       ├── dashboard/
│       │   └── page.tsx      # Dashboard overview
│       ├── audit/
│       │   └── page.tsx      # Audit details
│       └── architecture/
│           └── page.tsx      # Architecture page
├── components/
│   ├── navigation.tsx        # Header navigation
│   ├── footer.tsx            # Footer component
│   ├── theme-provider.tsx    # Theme provider setup
│   ├── theme-toggle.tsx      # Dark/light mode toggle
│   ├── dashboard-header.tsx  # Dashboard header
│   ├── score-card.tsx        # Metric score cards
│   ├── module-card.tsx       # Module grid cards
│   ├── metric-skeleton.tsx   # Loading skeleton
│   ├── empty-state.tsx       # Empty state component
│   └── responsive-grid.tsx   # Responsive grid layout
├── types/
│   └── audit.ts             # TypeScript interfaces and types
├── data/
│   ├── brands.json          # Mocked brand data
│   └── audit-modules.json   # Mocked audit modules
├── lib/
│   ├── audit-data.ts        # Data utilities
│   ├── store.ts             # Zustand store
│   └── utils.ts             # Helper functions
└── public/
    └── images/              # Static assets
\`\`\`

## Key Pages

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Marketing page, value proposition, and call-to-action |
| Platform | `/platform` | Detailed product features and AI pipeline visualization |
| About | `/about` | Company mission, philosophy, and vision |
| Dashboard | `/app/dashboard` | Key metrics overview and module selection |
| Audit | `/app/audit` | Detailed audit analysis with insights and recommendations |
| Architecture | `/app/architecture` | System design explanation and component breakdown |

## Dark/Light Mode

The platform features a professional dark/light mode toggle in the navigation header.

### Features
- **Theme Toggle Button** - Sun/Moon icon in the top-right navigation
- **Persistent Storage** - Your theme preference is saved to localStorage
- **System Preference Detection** - Defaults to system preference on first visit
- **Global Application** - Applies instantly across all pages
- **CSS Variables** - All colors use semantic design tokens for consistent theming

### How to Use
1. Click the sun/moon icon in the navigation header
2. Theme switches instantly across all pages
3. Preference is automatically saved

### Customizing Colors
Edit the CSS variables in `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: #3B82F6;
  --color-accent: #06B6D4;
  --color-background: #FFFFFF;
  --color-foreground: #1F2937;
  /* ... more variables */
}
\`\`\`

## Design System

### Color Palette
- **Primary**: Deep Indigo (#3B82F6)
- **Accent**: Cyan (#06B6D4)
- **Background**: White / Near-Black (#0F172A)
- **Foreground**: Dark Gray / Light Gray

### Typography
- **Headings**: Geist Sans (bold, 600-700 weight)
- **Body**: Geist Sans (regular, 400 weight)
- **Mono**: Geist Mono (code blocks)

### Spacing
Uses Tailwind's spacing scale: 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, etc.

## Customization

### Adding New Modules
1. Update `data/audit-modules.json` with new module data
2. Import in `lib/audit-data.ts`
3. Add route in `/app/app/audit`

### Changing Colors
1. Open `app/globals.css`
2. Update CSS variables under `@theme inline`
3. Changes apply globally

### Modifying Layout
- Edit component files in `/components`
- Use Tailwind classes for styling
- Maintain responsive breakpoints: `md:` (768px), `lg:` (1024px)

## Performance Optimizations

- **Code Splitting** - Automatic with Next.js
- **Image Optimization** - next/image for responsive images
- **CSS Purging** - Tailwind removes unused styles
- **State Management** - Zustand for efficient state updates
- **Component Memoization** - Prevents unnecessary re-renders

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your repository
4. Click "Deploy"
5. Vercel automatically builds and deploys on every push

### Deploy to Other Platforms

The project is a standard Next.js app and can be deployed to:
- AWS Amplify
- Netlify
- Railway
- Render
- Any Node.js hosting

## Development Workflow

### Code Style
- Use TypeScript for type safety
- Follow Tailwind utility-first CSS
- Keep components small and focused
- Use semantic HTML elements

### Git Workflow
\`\`\`bash
git checkout -b feature/your-feature
# Make changes
npm run build  # Verify build succeeds
git commit -m "feat: add your feature"
git push origin feature/your-feature
\`\`\`

## Troubleshooting

### Port 3000 Already in Use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Dark Mode Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then npm run dev)
- Check browser console for errors (F12)

### Build Errors
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check existing documentation
- Review the codebase structure above

## Acknowledgments

- Built with Next.js, React, and Tailwind CSS
- Icons from modern icon libraries
- Inspired by enterprise SaaS platforms
- Design system principles from leading design systems

---

**Made with ❤️ by the Kasparro Team**

Happy auditing! 🚀
\`\`\`

Here's your polished README.md! It includes:

- **Clear project description** - What Kasparro does and why it matters
- **Comprehensive features list** - Including the dark/light mode toggle
- **Tech stack** - All technologies used
- **Step-by-step installation** - Easy for anyone to get started
- **Complete project structure** - Shows folder organization
- **Key pages table** - Quick reference for all routes
- **Dark/Light mode documentation** - How to use and customize
- **Design system details** - Colors, typography, spacing
- **Deployment instructions** - Multiple platform options
- **Troubleshooting section** - Common issues and solutions

Simply copy the entire markdown block above and paste it into your GitHub repo as `README.md`. It's professional, comprehensive, and ready for production!
