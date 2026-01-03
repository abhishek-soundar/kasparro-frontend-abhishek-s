"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-base sm:text-lg hidden sm:inline">Kasparro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="/platform" className="text-sm font-medium hover:text-primary transition">
              Platform
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition">
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/app/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-accent rounded-md transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 pb-4 space-y-1">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition px-3 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/platform"
              className="block text-sm font-medium hover:text-primary transition px-3 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-primary transition px-3 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link href="/app/dashboard" onClick={() => setIsOpen(false)} className="block px-3 pt-2">
              <Button size="sm" className="w-full">
                Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
