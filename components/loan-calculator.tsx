"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp, AlertCircle, Info } from "lucide-react"
import { sifoBudget } from "@/lib/bank-data"

export function LoanCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(4000000)
  const [equity, setEquity] = useState(400000)
  const [annualIncome, setAnnualIncome] = useState(600000)
  const [existingDebt, setExistingDebt] = useState(0)
  const [loanTermYears, setLoanTermYears] = useState(25)
  const [interestRate, setInterestRate] = useState(4.89)
  const [householdType, setHouseholdType] = useState<"single" | "couple">("single")
  const [childrenUnder6, setChildrenUnder6] = useState(0)
  const [children6to13, setChildren6to13] = useState(0)
  const [children14to17, setChildren14to17] = useState(0)

  const calculations = useMemo(() => {
    const loanAmount = purchasePrice - equity
    const equityPercent = (equity / purchasePrice) * 100
    const debtRatio = (loanAmount + existingDebt) / annualIncome
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTermYears * 12

    const monthlyPayment =
      (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)

    const stressTestRate = (interestRate + 3) / 100 / 12
    const stressTestPayment =
      (loanAmount * (stressTestRate * Math.pow(1 + stressTestRate, numberOfPayments))) /
      (Math.pow(1 + stressTestRate, numberOfPayments) - 1)

    const totalCost = monthlyPayment * numberOfPayments
    const totalInterest = totalCost - loanAmount
    const monthlyIncome = annualIncome / 12
    const paymentToIncomeRatio = (monthlyPayment / monthlyIncome) * 100

    const maxLoanByIncome = annualIncome * 5 - existingDebt

    let sifoMonthly = 0
    sifoBudget.forEach((item) => {
      sifoMonthly += householdType === "single" ? item.single : item.couple
      sifoMonthly += item.childUnder6 * childrenUnder6
      sifoMonthly += item.child6to13 * children6to13
      sifoMonthly += item.child14to17 * children14to17
    })

    // Estimate housing costs (strøm, kommunale avgifter, forsikring etc.)
    const estimatedHousingCosts = 5000
    const totalMonthlyExpenses = sifoMonthly + estimatedHousingCosts + stressTestPayment
    const remainingAfterStressTest = monthlyIncome - totalMonthlyExpenses

    const warnings: string[] = []
    if (equityPercent < 10) {
      warnings.push("Egenkapital er under 10% - du trenger minimum 10% egenkapital")
    }
    if (debtRatio > 5) {
      warnings.push("Gjeld til inntekt overstiger 5x - dette er normalt maksgrensen")
    }
    if (remainingAfterStressTest < 0) {
      warnings.push("Du vil ikke bestå stresstesten - utgiftene overstiger inntekten ved 3% renteøkning")
    }

    return {
      loanAmount,
      equityPercent,
      debtRatio,
      monthlyPayment,
      stressTestPayment,
      totalCost,
      totalInterest,
      paymentToIncomeRatio,
      maxLoanByIncome,
      sifoMonthly,
      totalMonthlyExpenses,
      remainingAfterStressTest,
      warnings,
    }
  }, [
    purchasePrice,
    equity,
    annualIncome,
    existingDebt,
    loanTermYears,
    interestRate,
    householdType,
    childrenUnder6,
    children6to13,
    children14to17,
  ])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Lånekalkulator</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Beregn månedlige kostnader og se hvor mye du kan låne. Inkluderer SIFO-budsjett for realistisk
            betjeningsevne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-accent" />
                Dine tall
              </CardTitle>
              <CardDescription>Fyll inn informasjon om boligkjøpet og din økonomi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Kjøpesum bolig</Label>
                <Input
                  id="purchasePrice"
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="text-lg"
                />
                <Slider
                  value={[purchasePrice]}
                  onValueChange={([value]) => setPurchasePrice(value)}
                  min={1000000}
                  max={15000000}
                  step={100000}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground">{formatCurrency(purchasePrice)}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="equity">Egenkapital</Label>
                <Input id="equity" type="number" value={equity} onChange={(e) => setEquity(Number(e.target.value))} />
                <Slider
                  value={[equity]}
                  onValueChange={([value]) => setEquity(value)}
                  min={0}
                  max={purchasePrice}
                  step={50000}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground">
                  {formatCurrency(equity)} ({calculations.equityPercent.toFixed(1)}%)
                  {calculations.equityPercent >= 10 && <span className="text-accent ml-2">Oppfyller 10% krav</span>}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualIncome">Årlig bruttoinntekt (samlet husstand)</Label>
                <Input
                  id="annualIncome"
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="existingDebt">Eksisterende gjeld (studielån, billån etc.)</Label>
                <Input
                  id="existingDebt"
                  type="number"
                  value={existingDebt}
                  onChange={(e) => setExistingDebt(Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="loanTerm">Nedbetalingstid (år)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    min={5}
                    max={30}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interestRate">Rente (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step={0.01}
                    min={0}
                    max={15}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Husstand for SIFO-beregning</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Husstandstype</Label>
                    <Select value={householdType} onValueChange={(v) => setHouseholdType(v as "single" | "couple")}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Enslig</SelectItem>
                        <SelectItem value="couple">Par</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Barn under 6 år</Label>
                    <Input
                      type="number"
                      min={0}
                      max={5}
                      value={childrenUnder6}
                      onChange={(e) => setChildrenUnder6(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Barn 6-13 år</Label>
                    <Input
                      type="number"
                      min={0}
                      max={5}
                      value={children6to13}
                      onChange={(e) => setChildren6to13(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Barn 14-17 år</Label>
                    <Input
                      type="number"
                      min={0}
                      max={5}
                      value={children14to17}
                      onChange={(e) => setChildren14to17(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Resultat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="monthly" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="monthly">Månedlig</TabsTrigger>
                    <TabsTrigger value="total">Totalt</TabsTrigger>
                    <TabsTrigger value="sifo">SIFO</TabsTrigger>
                  </TabsList>
                  <TabsContent value="monthly" className="space-y-4 mt-4">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Månedlig betaling</p>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(calculations.monthlyPayment)}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Ved stresstest (+3%)</p>
                        <p className="text-xl font-semibold text-foreground">
                          {formatCurrency(calculations.stressTestPayment)}
                        </p>
                      </div>
                      <div className="bg-secondary rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Andel av inntekt</p>
                        <p className="text-xl font-semibold text-foreground">
                          {calculations.paymentToIncomeRatio.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="total" className="space-y-4 mt-4">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Lånebeløp</p>
                      <p className="text-3xl font-bold text-foreground">{formatCurrency(calculations.loanAmount)}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Total rentekostnad</p>
                        <p className="text-xl font-semibold text-foreground">
                          {formatCurrency(calculations.totalInterest)}
                        </p>
                      </div>
                      <div className="bg-secondary rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">Gjeld/inntekt</p>
                        <p className="text-xl font-semibold text-foreground">{calculations.debtRatio.toFixed(1)}x</p>
                      </div>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Maks lån (5x inntekt)</p>
                      <p className="text-xl font-semibold text-foreground">
                        {formatCurrency(calculations.maxLoanByIncome)}
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="sifo" className="space-y-4 mt-4">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">SIFO referansebudsjett</p>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(calculations.sifoMonthly)}
                        <span className="text-base font-normal text-muted-foreground">/mnd</span>
                      </p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Totale utgifter ved stresstest</p>
                      <p className="text-lg font-semibold text-foreground">
                        {formatCurrency(calculations.totalMonthlyExpenses)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        SIFO + boligkostnader (5000kr) + lån ved +3% rente
                      </p>
                    </div>
                    <div
                      className={`rounded-lg p-4 ${calculations.remainingAfterStressTest >= 0 ? "bg-accent/10" : "bg-destructive/10"}`}
                    >
                      <p className="text-sm text-muted-foreground">Til overs etter stresstest</p>
                      <p
                        className={`text-xl font-semibold ${calculations.remainingAfterStressTest >= 0 ? "text-accent" : "text-destructive"}`}
                      >
                        {formatCurrency(calculations.remainingAfterStressTest)}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      SIFO (Statens institutt for forbruksforskning) lager referansebudsjett som bankene bruker for å
                      vurdere betjeningsevne.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {calculations.warnings.length > 0 && (
              <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-destructive text-base">
                    <AlertCircle className="h-5 w-5" />
                    Viktig å vite
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {calculations.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-foreground">
                        {warning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
