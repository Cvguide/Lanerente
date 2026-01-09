"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Sammenlign banker", href: "#sammenlign" },
    { name: "Renter fra forum", href: "#forumrenter" },
    { name: "Finansieringsbevis", href: "#finansieringsbevis" },
    { name: "Andre veier inn", href: "#alternativer" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Boliglån</span>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild>
              <Link href="#kalkulator">Beregn lånet ditt</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Åpne meny</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#kalkulator" onClick={() => setMobileMenuOpen(false)}>
                  Beregn lånet ditt
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
