import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { financingRequirements } from "@/lib/bank-data"
import { Wallet, Briefcase, CreditCard, Calculator } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
  "credit-card": <CreditCard className="h-6 w-6" />,
  calculator: <Calculator className="h-6 w-6" />,
}

export function FinancingGuide() {
  const steps = [
    {
      number: "01",
      title: "Sjekk din økonomi",
      description: "Bruk kalkulatoren vår til å beregne hvor mye du kan låne basert på inntekt og egenkapital.",
    },
    {
      number: "02",
      title: "Sammenlign banker",
      description: "Se på renter og vilkår fra forskjellige banker. Velg 2-3 banker du vil søke hos.",
    },
    {
      number: "03",
      title: "Start digital søknad",
      description: "Send søknad digitalt med BankID. Banken henter det meste av dokumentasjonen automatisk.",
    },
    {
      number: "04",
      title: "Lever dokumenter",
      description: "Last opp arbeidskontrakt og egenkapitaldokumentasjon i bankens portal.",
    },
    {
      number: "05",
      title: "Motta bevis",
      description: "Finansieringsbeviset er normalt gyldig i 3-6 måneder. Nå kan du legge inn bud!",
    },
  ]

  return (
    <section id="finansieringsbevis" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Slik får du finansieringsbevis</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Et finansieringsbevis viser selger at du har økonomi til å kjøpe boligen. Her er alt du trenger å vite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financingRequirements.map((req) => (
            <Card key={req.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                  {iconMap[req.icon]}
                </div>
                <CardTitle className="text-lg">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-12">
            Steg for steg til finansieringsbevis
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-primary-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-primary-foreground/20 -translate-x-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
