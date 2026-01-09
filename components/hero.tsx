import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingDown, FileCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
              Finn det beste boliglånet for deg.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl text-pretty">
              Sammenlign renter fra norske banker, beregn hvor mye du kan låne, og få all informasjon du trenger for å
              søke finansieringsbevis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#kalkulator">
                  Start kalkulator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="#sammenlign">Sammenlign banker</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex gap-4">
              <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <Shield className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-foreground">Trygg prosess</h3>
                <p className="text-sm text-primary-foreground/70 mt-1">Uavhengig informasjon om boliglån</p>
              </div>
              <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <FileCheck className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-foreground">Finansieringsbevis</h3>
                <p className="text-sm text-primary-foreground/70 mt-1">Alt du trenger for å søke</p>
              </div>
              <div className="flex-1 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <TrendingDown className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-foreground">Beste renter</h3>
                <p className="text-sm text-primary-foreground/70 mt-1">Oppdaterte renter fra 20+ banker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
