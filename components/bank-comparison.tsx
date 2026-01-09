"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { bankRates, type BankRate } from "@/lib/bank-data"
import { ArrowUpDown, ExternalLink, Check, Building2 } from "lucide-react"

type SortField = "effectiveRate" | "nominalRate" | "termFee" | "name"

export function BankComparison() {
  const [loanAmount, setLoanAmount] = useState(3400000)
  const [sortBy, setSortBy] = useState<SortField>("effectiveRate")
  const [sortAsc, setSortAsc] = useState(true)

  const sortedBanks = useMemo(() => {
    return [...bankRates].sort((a, b) => {
      let comparison = 0
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name)
      } else {
        comparison = a[sortBy] - b[sortBy]
      }
      return sortAsc ? comparison : -comparison
    })
  }, [sortBy, sortAsc])

  const calculateMonthlyCost = (bank: BankRate, amount: number) => {
    const monthlyRate = bank.nominalRate / 100 / 12
    const numberOfPayments = 25 * 12
    const annuity =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return annuity + bank.termFee
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const lowestRate = Math.min(...bankRates.map((b) => b.effectiveRate))

  return (
    <section id="sammenlign" className="py-16 sm:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sammenlign boliglånsrenter</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oppdaterte renter fra de største norske bankene. Rentene er veiledende og kan variere basert på din
            situasjon.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <Label htmlFor="loanAmountCompare">Lånebeløp for beregning</Label>
                <Input
                  id="loanAmountCompare"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
              </div>
              <div className="w-full sm:w-48 space-y-2">
                <Label>Sorter etter</Label>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortField)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="effectiveRate">Effektiv rente</SelectItem>
                    <SelectItem value="nominalRate">Nominell rente</SelectItem>
                    <SelectItem value="termFee">Termingebyr</SelectItem>
                    <SelectItem value="name">Banknavn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" onClick={() => setSortAsc(!sortAsc)} className="shrink-0">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {sortAsc ? "Lavest først" : "Høyest først"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {sortedBanks.map((bank, index) => {
            const monthlyCost = calculateMonthlyCost(bank, loanAmount)
            const isLowest = bank.effectiveRate === lowestRate

            return (
              <Card key={bank.id} className={`transition-all hover:shadow-md ${isLowest ? "ring-2 ring-accent" : ""}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 lg:w-48">
                      <div className="relative h-10 w-24 bg-muted rounded flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{bank.name}</h3>
                        {isLowest && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground mt-1">
                            Lavest rente
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-sm text-muted-foreground">Nominell rente</p>
                        <p className="text-lg font-semibold text-foreground">{bank.nominalRate.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Effektiv rente</p>
                        <p className="text-lg font-semibold text-foreground">{bank.effectiveRate.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Termingebyr</p>
                        <p className="text-lg font-semibold text-foreground">{formatCurrency(bank.termFee)}/mnd</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Månedlig kostnad</p>
                        <p className="text-lg font-semibold text-accent">{formatCurrency(monthlyCost)}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 lg:w-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a href={bank.url} target="_blank" rel="noopener noreferrer">
                          Til banken
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {bank.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Check className="h-3 w-3 text-accent" />
                          {feature}
                        </div>
                      ))}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span className="font-medium">Maks belåning:</span> {bank.maxLtv}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          * Rentene er hentet januar 2026 og kan ha endret seg. Sjekk alltid bankens egne nettsider for oppdaterte
          renter.
        </p>
      </div>
    </section>
  )
}
