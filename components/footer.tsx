import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-sm mb-4">Kasparro</h3>
            <p className="text-sm text-muted-foreground">
              AI-native SEO & Brand Intelligence for the AI-first search era.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/platform" className="hover:text-foreground transition">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; 2025 Kasparro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
