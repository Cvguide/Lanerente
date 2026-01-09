import Link from "next/link"
import { Home } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/20">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-primary-foreground">BoligLån</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Vi hjelper deg med å finne det beste boliglånet. Sammenlign renter, bruk kalkulatoren og få oversikt over
              hva du trenger for å søke finansieringsbevis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Verktøy</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#kalkulator"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Lånekalkulator
                </Link>
              </li>
              <li>
                <Link
                  href="#sammenlign"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Sammenlign banker
                </Link>
              </li>
              <li>
                <Link
                  href="#finansieringsbevis"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Finansieringsbevis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Informasjon</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#dokumenter"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Dokumenter
                </Link>
              </li>
              <li>
                <span className="text-primary-foreground/70">Om oss</span>
              </li>
              <li>
                <span className="text-primary-foreground/70">Personvern</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/50 text-center">
            Informasjonen på denne siden er kun veiledende. Kontakt bankene direkte for bindende tilbud.
            <br />© 2026 BoligLån. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}
