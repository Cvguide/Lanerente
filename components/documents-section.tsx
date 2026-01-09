import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { requiredDocuments, electronicDocuments } from "@/lib/bank-data"
import { FileText, CheckCircle2, AlertTriangle, Lightbulb, Wifi, Briefcase } from "lucide-react"

export function DocumentsSection() {
  return (
    <section id="dokumenter" className="py-16 sm:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Dokumenter for lånesøknad</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bankene henter det meste av informasjonen elektronisk. Her er hva du må ha klart selv.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-accent" />
                  Hentes automatisk av banken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Banken henter disse opplysningene elektronisk via Altinn, A-ordningen og Gjeldsregisteret:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {electronicDocuments.map((doc) => (
                    <div key={doc.title} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Du må levere selv
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc) => (
                    <div key={doc.title} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Selvstendig næringsdrivende
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Driver du eget firma? Da trenger banken mer dokumentasjon for å vurdere inntekten din:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Næringsoppgave</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        De siste 2-3 års næringsoppgaver (RF-1175 eller RF-1167)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Årsregnskap</h4>
                      <p className="text-sm text-muted-foreground mt-1">Resultat- og balanseregnskap for selskapet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Skattemelding næring</h4>
                      <p className="text-sm text-muted-foreground mt-1">Skattemelding som viser næringsinntekt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Utskrift fra Brønnøysund</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Firmaattest som viser registrering og eierskap
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Bankene bruker ofte gjennomsnitt av de siste 2-3 års inntekt når de vurderer låneevnen til
                  næringsdrivende.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Digital prosess</h4>
                  <p className="text-sm text-muted-foreground">
                    De fleste banker har heldigitale søknadsprosesser med BankID.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Samtykke</h4>
                  <p className="text-sm text-muted-foreground">
                    Du gir banken samtykke til å hente opplysninger når du signerer søknaden.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Rask behandling</h4>
                  <p className="text-sm text-muted-foreground">
                    Elektronisk innhenting gir raskere saksbehandling - ofte svar samme dag.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Hvitvasking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">
                  Egenkapital fra BSU, arv, gave eller salg av bolig må dokumenteres. Banken må vite hvor pengene kommer
                  fra for å følge hvitvaskingsregelverket. Ved gave fra foreldre trengs en gaveerklæring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
