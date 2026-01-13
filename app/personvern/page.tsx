export const metadata = {
  title: "Personvernerklæring | lanerente.no",
  description: "Informasjon om hvordan lanerente.no behandler personopplysninger",
};

export default function PersonvernPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Personvernerklæring</h1>

      <p className="mb-4">
        Denne personvernerklæringen forklarer hvordan lanerente.no samler inn og
        behandler personopplysninger.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Behandlingsansvarlig
      </h2>
      <p className="mb-4">
        lanerente.no er en uavhengig informasjonsside. Dersom du har spørsmål om
        personvern, kan du kontakte oss på{" "}
        <a href="mailto:halvor.ringen@hotmail.com" className="underline">
          halvor.ringen@hotmail.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Hvilke opplysninger samles inn
      </h2>
      <p className="mb-4">
        lanerente.no samler ikke inn personopplysninger som navn, fødselsnummer,
        adresse eller betalingsinformasjon.
      </p>
      <p className="mb-4">
        Nettsiden benytter anonym bruksstatistikk for å forstå hvordan siden
        brukes, for eksempel antall besøk og hvilke sider som besøkes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Analyseverktøy
      </h2>
      <p className="mb-4">
        Vi bruker Vercel Analytics for å samle inn anonym statistikk om bruk av
        nettsiden. Denne informasjonen kan ikke brukes til å identifisere
        enkeltpersoner.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Informasjonskapsler (cookies)
      </h2>
      <p className="mb-4">
        lanerente.no bruker ikke informasjonskapsler for markedsføring eller
        sporing av enkeltbrukere. Eventuelle tekniske informasjonskapsler brukes
        kun for å sikre normal funksjonalitet.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Deling av opplysninger
      </h2>
      <p className="mb-4">
        Vi deler ikke personopplysninger med tredjeparter.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Dine rettigheter
      </h2>
      <p className="mb-4">
        Du har rett til innsyn i hvilke personopplysninger som eventuelt
        behandles, samt rett til retting eller sletting i henhold til gjeldende
        personvernlovgivning.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Endringer
      </h2>
      <p className="mb-4">
        Denne personvernerklæringen kan oppdateres ved behov. Vesentlige endringer
        vil publiseres på denne siden.
      </p>
    </main>
  );
}
