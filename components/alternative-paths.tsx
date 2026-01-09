"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { alternativePaths } from "@/lib/bank-data"
import { Share2, Landmark, Users, Home, CheckCircle2, XCircle, ChevronDown, ChevronUp, Lightbulb } from "lucide-react"
import type React from "react"

const iconMap: Record<string, React.ReactNode> = {
  share: <Share2 className="h-6 w-6" />,
  landmark: <Landmark className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  home: <Home className="h-6 w-6" />,
}

export function AlternativePaths() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="alternativer" className="py-16 sm:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Andre veier inn på boligmarkedet</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oppfyller du ikke de vanlige kravene til egenkapital eller inntekt? Her er løsninger som kan hjelpe deg på
            vei til egen bolig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternativePaths.map((path) => {
            const isExpanded = expandedId === path.id

            return (
              <Card key={path.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                      {iconMap[path.icon]}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => setExpandedId(isExpanded ? null : path.id)}
                  >
                    <span>{isExpanded ? "Vis mindre" : "Les mer"}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {isExpanded && (
                    <div className="space-y-6 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Slik fungerer det</h4>
                        <ol className="space-y-2">
                          {path.howItWorks.map((step, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-medium shrink-0">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent" />
                            Fordeler
                          </h4>
                          <ul className="space-y-2">
                            {path.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-accent mt-1">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-destructive" />
                            Ulemper
                          </h4>
                          <ul className="space-y-2">
                            {path.cons.map((con, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-destructive mt-1">-</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-accent/5 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-accent" />
                          Hvem passer dette for?
                        </h4>
                        <p className="text-sm text-muted-foreground">{path.eligibility}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Usikker på hvilken løsning som passer deg?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Ta en prat med banken din eller en uavhengig finansrådgiver for å finne beste løsning for din situasjon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
