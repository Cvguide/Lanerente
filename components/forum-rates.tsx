"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { forumRates } from "@/lib/bank-data"
import { TrendingDown, Calendar, ExternalLink, AlertTriangle } from "lucide-react"

export function ForumRates() {
  const sortedRates = [...forumRates].sort((a, b) => a.rate - b.rate)
  const lowestRate = sortedRates[0]?.rate

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("nb-NO", {
      day: "numeric",
      month: "short",
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getSourceUrl = (source: string): string => {
    const sourceUrls: Record<string, string> = {
      "Finansavisen forum": "https://forum.teleblad.com/viewforum.php?f=54",
      "Klikk.no bolig": "https://www.klikk.no/bolig/",
      "Diskusjon.no": "https://www.teleblad.com/okonomi/",
      "Reddit r/NorskPersonalokonomi": "https://www.reddit.com/r/NorskPersonalokonomi/",
    }
    return sourceUrls[source] || "#"
  }

  return (
    <section id="forumrenter" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Renter fra forum</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hva andre rapporterer at de har fått i rente. Samlet fra norske finansforum siste måned.
          </p>
        </div>

        <Card className="mb-8 bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-1">Uverifisert informasjon</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Disse rentene er selvrapporterte og vi kan ikke garantere at de er korrekte. Belåningsgrad, inntekt,
                  kundeforhold og forhandlingsevne påvirker renten du kan få. Klikk på kilden for å verifisere i
                  kommentarfeltet selv.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedRates.map((rate) => (
            <Card
              key={`${rate.bank}-${rate.date}`}
              className={`transition-all hover:shadow-md ${rate.rate === lowestRate ? "ring-2 ring-accent" : ""}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{rate.bank}</h3>
                  {rate.rate === lowestRate && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      Lavest
                    </Badge>
                  )}
                </div>

                <div className="text-3xl font-bold text-foreground mb-4">{rate.rate.toFixed(2)}%</div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lånebeløp:</span>
                    <span className="font-medium text-foreground">{formatCurrency(rate.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Belåningsgrad:</span>
                    <span className="font-medium text-foreground">{rate.ltv}%</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(rate.date)}</span>
                    </div>
                    <a
                      href={getSourceUrl(rate.source)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline inline-flex items-center gap-1"
                    >
                      {rate.source.split(" ")[0]}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">Sjekk kildene selv for å verifisere informasjonen:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forum.teleblad.com/viewforum.php?f=54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1 bg-accent/10 px-3 py-1.5 rounded-full"
            >
              Finansavisen forum <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.reddit.com/r/NorskPersonalokonomi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1 bg-accent/10 px-3 py-1.5 rounded-full"
            >
              Reddit r/NorskPersonalokonomi <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.teleblad.com/okonomi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1 bg-accent/10 px-3 py-1.5 rounded-full"
            >
              Diskusjon.no <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.klikk.no/bolig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline inline-flex items-center gap-1 bg-accent/10 px-3 py-1.5 rounded-full"
            >
              Klikk.no <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
