export interface BankRate {
  id: string
  name: string
  logo: string
  nominalRate: number
  effectiveRate: number
  maxLtv: number
  maxDebtRatio: number
  minEquity: number
  processingFee: number
  establishmentFee: number
  termFee: number
  features: string[]
  url: string
  source: string // Lagt til kilde for renteinformasjon
}

// Kun flytende rente - fjernet fastrente
export const bankRates: BankRate[] = [
  // Store nasjonale banker
  {
    id: "dnb",
    name: "DNB",
    logo: "/dnb-bank-logo.jpg",
    nominalRate: 4.99,
    effectiveRate: 5.12,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 50,
    features: ["Fleksibel nedbetaling", "Digital signering", "Stor bank"],
    url: "https://dnb.no",
    source: "dnb.no",
  },
  {
    id: "nordea",
    name: "Nordea",
    logo: "/nordea-bank-logo.jpg",
    nominalRate: 4.85,
    effectiveRate: 4.98,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 45,
    features: ["Gode medlemsfordeler", "Avdragsfrihet", "Lendo-partner"],
    url: "https://nordea.no",
    source: "Lendo",
  },
  {
    id: "sbanken",
    name: "Sbanken",
    logo: "/sbanken-bank-logo.jpg",
    nominalRate: 4.79,
    effectiveRate: 4.89,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 0,
    features: ["Ingen termingebyr", "Heldigital prosess", "Konkurransedyktige renter"],
    url: "https://sbanken.no",
    source: "sbanken.no",
  },
  {
    id: "handelsbanken",
    name: "Handelsbanken",
    logo: "/handelsbanken-logo.jpg",
    nominalRate: 4.89,
    effectiveRate: 5.02,
    maxLtv: 85,
    maxDebtRatio: 5,
    minEquity: 15,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 30,
    features: ["Personlig rådgiver", "Skreddersydde løsninger", "Lokalt fokus"],
    url: "https://handelsbanken.no",
    source: "handelsbanken.no",
  },
  {
    id: "danske",
    name: "Danske Bank",
    logo: "/danske-bank-logo.png",
    nominalRate: 4.92,
    effectiveRate: 5.05,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 35,
    features: ["Fleksibilitet", "Gode digitale tjenester"],
    url: "https://danskebank.no",
    source: "danskebank.no",
  },

  // Digitale utfordrere
  {
    id: "bulder",
    name: "Bulder Bank",
    logo: "/bulder-bank-logo.jpg",
    nominalRate: 4.69,
    effectiveRate: 4.79,
    maxLtv: 85,
    maxDebtRatio: 5,
    minEquity: 15,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 0,
    features: ["Laveste renter", "100% digital", "Ingen gebyrer"],
    url: "https://bulderbank.no",
    source: "bulderbank.no",
  },
  {
    id: "obos",
    name: "OBOS-banken",
    logo: "/obos-banken-logo.jpg",
    nominalRate: 4.75,
    effectiveRate: 4.88,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 30,
    features: ["OBOS-medlemsfordeler", "Boligkjøpsforsikring", "Rådgivning"],
    url: "https://obosbanken.no",
    source: "obosbanken.no",
  },

  // Lendo boliglånsbanker
  {
    id: "bn-bank",
    name: "BN Bank",
    logo: "/bn-bank-logo.jpg",
    nominalRate: 4.82,
    effectiveRate: 4.95,
    maxLtv: 85,
    maxDebtRatio: 5,
    minEquity: 15,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 35,
    features: ["SpareBank 1-eid", "Nettbank", "Lendo-partner"],
    url: "https://bnbank.no",
    source: "Lendo",
  },
  {
    id: "instabank",
    name: "Instabank",
    logo: "/instabank-logo.jpg",
    nominalRate: 4.95,
    effectiveRate: 5.08,
    maxLtv: 85,
    maxDebtRatio: 5,
    minEquity: 15,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 0,
    features: ["Heldigital", "Rask behandling", "Lendo-partner"],
    url: "https://instabank.no",
    source: "Lendo",
  },
  {
    id: "jbf",
    name: "JBF",
    logo: "/jbf-bank-logo.jpg",
    nominalRate: 4.88,
    effectiveRate: 5.01,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 40,
    features: ["Personlig veiledning", "Lendo-partner"],
    url: "https://jfrb.no",
    source: "Lendo",
  },
  {
    id: "romerike",
    name: "Romerike Sparebank",
    logo: "/romerike-sparebank-logo.jpg",
    nominalRate: 4.79,
    effectiveRate: 4.92,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 35,
    features: ["Lokalt eierskap", "Gode betingelser", "Lendo-partner"],
    url: "https://rfrb.no",
    source: "Lendo",
  },
  {
    id: "skue",
    name: "Skue Sparebank",
    logo: "/skue-sparebank-logo.jpg",
    nominalRate: 4.81,
    effectiveRate: 4.94,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 30,
    features: ["Personlig service", "Lendo-partner"],
    url: "https://skuesparebank.no",
    source: "Lendo",
  },
  {
    id: "sb1-hallingdal",
    name: "SpareBank 1 Hallingdal Valdres",
    logo: "/sparebank-1-hallingdal-logo.jpg",
    nominalRate: 4.74,
    effectiveRate: 4.87,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 40,
    features: ["LOfavør-rabatt", "Kundeutbytte", "Lendo-partner"],
    url: "https://sb1hv.no",
    source: "Lendo",
  },
  {
    id: "sb1-ringerike",
    name: "SpareBank 1 Ringerike Hadeland",
    logo: "/sparebank-1-ringerike-logo.jpg",
    nominalRate: 4.76,
    effectiveRate: 4.89,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 35,
    features: ["Lokalt fokus", "LOfavør-rabatt", "Lendo-partner"],
    url: "https://sfrh.no",
    source: "Lendo",
  },
  {
    id: "sb1-smn",
    name: "SpareBank 1 SMN",
    logo: "/sparebank-1-smn-logo.jpg",
    nominalRate: 4.78,
    effectiveRate: 4.91,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 40,
    features: ["Trøndelag-basert", "Kundeutbytte", "Lendo-partner"],
    url: "https://sparebank1.no/smn",
    source: "Lendo",
  },

  // Andre SpareBank 1-banker
  {
    id: "sb1-sr",
    name: "SpareBank 1 SR-Bank",
    logo: "/sparebank-1-sr-bank-logo.jpg",
    nominalRate: 4.85,
    effectiveRate: 4.98,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 45,
    features: ["Rogaland-basert", "Kundeutbytte", "LOfavør-rabatt"],
    url: "https://sparebank1.no/sr-bank",
    source: "sparebank1.no",
  },
  {
    id: "sb1-ostlandet",
    name: "SpareBank 1 Østlandet",
    logo: "/sparebank-1--stlandet-logo.jpg",
    nominalRate: 4.83,
    effectiveRate: 4.96,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 40,
    features: ["Innlandet og Østfold", "Kundeutbytte", "LOfavør-rabatt"],
    url: "https://sparebank1.no/ostlandet",
    source: "sparebank1.no",
  },

  // Andre banker
  {
    id: "kron",
    name: "Kron",
    logo: "/kron-bank-logo.jpg",
    nominalRate: 4.72,
    effectiveRate: 4.82,
    maxLtv: 75,
    maxDebtRatio: 5,
    minEquity: 25,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 0,
    features: ["Lav rente", "Heldigital", "Krever høy egenkapital"],
    url: "https://kron.no",
    source: "kron.no",
  },
  {
    id: "landkreditt",
    name: "Landkreditt Bank",
    logo: "/landkreditt-bank-logo.jpg",
    nominalRate: 4.89,
    effectiveRate: 5.02,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 35,
    features: ["Norsk eid", "Medlemsfordeler"],
    url: "https://landkredittbank.no",
    source: "landkredittbank.no",
  },
  {
    id: "storebrand",
    name: "Storebrand Bank",
    logo: "/storebrand-bank-logo.jpg",
    nominalRate: 4.91,
    effectiveRate: 5.04,
    maxLtv: 85,
    maxDebtRatio: 5,
    minEquity: 15,
    processingFee: 0,
    establishmentFee: 0,
    termFee: 40,
    features: ["Forsikring + bank", "Gode totalpakker"],
    url: "https://storebrand.no/bank",
    source: "storebrand.no",
  },
]

export interface FinancingRequirement {
  title: string
  description: string
  icon: string
}

export const financingRequirements: FinancingRequirement[] = [
  {
    title: "Egenkapital",
    description: "Du trenger minimum 10% egenkapital av boligens kjøpesum.",
    icon: "wallet",
  },
  {
    title: "Inntekt",
    description: "Samlet gjeld kan ikke overstige 5 ganger årlig bruttoinntekt. Stabil inntekt er viktig.",
    icon: "briefcase",
  },
  {
    title: "Gjeld",
    description: "Eksisterende gjeld som studielån, billån og kredittkort påvirker hvor mye du kan låne.",
    icon: "credit-card",
  },
  {
    title: "Betjeningsevne",
    description: "Banken vurderer om du tåler 3% renteøkning og fortsatt har nok til å leve av etter SIFO-budsjettet.",
    icon: "calculator",
  },
]

export interface DocumentItem {
  title: string
  description: string
  electronic?: boolean
}

export const requiredDocuments: DocumentItem[] = [
  {
    title: "Arbeidskontrakt",
    description: "Bekreftelse på fast ansettelse eller arbeidsavtale",
    electronic: false,
  },
  {
    title: "Egenkapitaldokumentasjon",
    description: "Dokumentasjon på hvor egenkapitalen kommer fra (BSU, arv, gave, salg av bolig)",
    electronic: false,
  },
  {
    title: "Leiekontrakter",
    description: "Hvis du har utleieinntekter som skal medregnes",
    electronic: false,
  },
]

export const electronicDocuments = [
  {
    title: "Skattemelding",
    description: "Hentes automatisk av banken via Altinn",
  },
  {
    title: "Lønnsopplysninger",
    description: "Hentes automatisk av banken via A-ordningen",
  },
  {
    title: "Gjeldsinformasjon",
    description: "Hentes automatisk fra Gjeldsregisteret",
  },
]

export interface ForumRate {
  bank: string
  rate: number
  loanAmount: number
  ltv: number
  date: string
  source: string
  sourceUrl: string
}

export const forumRates: ForumRate[] = [
  {
    bank: "DNB",
    rate: 4.85,
    loanAmount: 3500000,
    ltv: 70,
    date: "2026-01-05",
    source: "Finansavisen forum",
    sourceUrl: "https://forum.teleblad.com/viewforum.php?f=54",
  },
  {
    bank: "Nordea",
    rate: 4.69,
    loanAmount: 4200000,
    ltv: 65,
    date: "2026-01-03",
    source: "Klikk.no",
    sourceUrl: "https://www.klikk.no/bolig/",
  },
  {
    bank: "Sbanken",
    rate: 4.55,
    loanAmount: 2800000,
    ltv: 60,
    date: "2026-01-06",
    source: "Diskusjon.no",
    sourceUrl: "https://www.teleblad.com/okonomi/",
  },
  {
    bank: "SpareBank 1",
    rate: 4.72,
    loanAmount: 3800000,
    ltv: 72,
    date: "2026-01-04",
    source: "Reddit",
    sourceUrl: "https://www.reddit.com/r/NorskPersonalokonomi/",
  },
  {
    bank: "Bulder Bank",
    rate: 4.45,
    loanAmount: 3200000,
    ltv: 55,
    date: "2026-01-07",
    source: "Finansavisen forum",
    sourceUrl: "https://forum.teleblad.com/viewforum.php?f=54",
  },
  {
    bank: "OBOS-banken",
    rate: 4.59,
    loanAmount: 4000000,
    ltv: 68,
    date: "2026-01-02",
    source: "Klikk.no",
    sourceUrl: "https://www.klikk.no/bolig/",
  },
  {
    bank: "Danske Bank",
    rate: 4.78,
    loanAmount: 3600000,
    ltv: 75,
    date: "2026-01-05",
    source: "Diskusjon.no",
    sourceUrl: "https://www.teleblad.com/okonomi/",
  },
  {
    bank: "Handelsbanken",
    rate: 4.65,
    loanAmount: 5000000,
    ltv: 60,
    date: "2026-01-06",
    source: "Reddit",
    sourceUrl: "https://www.reddit.com/r/NorskPersonalokonomi/",
  },
]

export interface SifoBudget {
  category: string
  single: number
  couple: number
  childUnder6: number
  child6to13: number
  child14to17: number
}

export const sifoBudget: SifoBudget[] = [
  { category: "Mat og drikke", single: 3940, couple: 7090, childUnder6: 1690, child6to13: 2280, child14to17: 2960 },
  { category: "Klær og sko", single: 890, couple: 1780, childUnder6: 680, child6to13: 790, child14to17: 920 },
  { category: "Personlig pleie", single: 770, couple: 1350, childUnder6: 340, child6to13: 420, child14to17: 660 },
  { category: "Lek og fritid", single: 1640, couple: 2170, childUnder6: 540, child6to13: 940, child14to17: 1100 },
  { category: "Andre utgifter", single: 390, couple: 530, childUnder6: 270, child6to13: 340, child14to17: 420 },
]

export interface AlternativePath {
  id: string
  title: string
  description: string
  howItWorks: string[]
  pros: string[]
  cons: string[]
  eligibility: string
  icon: string
}

export const alternativePaths: AlternativePath[] = [
  {
    id: "deleie",
    title: "Deleie",
    description:
      "Kjøp en andel av boligen (typisk 50-80%) og betal husleie på resten. Over tid kan du kjøpe deg opp til 100%.",
    howItWorks: [
      "Du kjøper en andel av boligen (vanligvis 50-80%)",
      "Du betaler husleie på andelen du ikke eier",
      "Du kan gradvis kjøpe deg opp til full eierskap",
      "Prisen på resterende andel er ofte prisjustert",
    ],
    pros: [
      "Lavere egenkapitalkrav",
      "Mulighet til å komme inn på boligmarkedet tidligere",
      "Du tjener på verdistigning på din andel",
      "Fleksibel oppkjøpsplan",
    ],
    cons: [
      "Du betaler husleie i tillegg til lån",
      "Begrenset utvalg av boliger",
      "Kan være dyrere totalt sett over tid",
    ],
    eligibility: "Tilbys av flere utbyggere og boligbyggelag. Sjekk OBOS, USBL, og nybyggprosjekter.",
    icon: "share",
  },
  {
    id: "bostart",
    title: "Bostart (Husbanken)",
    description:
      "Et lån fra Husbanken som kan brukes som egenkapital, slik at du kan kjøpe bolig med lavere sparebeløp.",
    howItWorks: [
      "Søk om Bostart-lån hos din kommune",
      "Lånet kan dekke inntil 15% av kjøpesummen",
      "Bostart-lånet brukes som egenkapital",
      "Du får ordinært boliglån fra vanlig bank på toppen",
    ],
    pros: [
      "Kan kjøpe bolig uten full egenkapital",
      "Gunstige rentevilkår fra Husbanken",
      "Tilpasset førstegangskjøpere",
    ],
    cons: [
      "Strenge inntektsgrenser",
      "Begrenset til visse boligtyper og priser",
      "Kommunen må tilby ordningen",
      "Lang behandlingstid",
    ],
    eligibility: "Førstegangskjøpere med inntekt under kommunens grenser. Varierer mellom kommuner.",
    icon: "landmark",
  },
  {
    id: "medlantaker",
    title: "Medlåntaker",
    description: "En person som låner sammen med deg og er ansvarlig for gjelden. Typisk foreldre eller partner.",
    howItWorks: [
      "En annen person står på lånet sammen med deg",
      "Begges inntekt regnes med i betjeningsevne",
      "Begge er fullt ansvarlige for hele lånet",
      "Medlåntaker kan fjernes når du har god nok økonomi alene",
    ],
    pros: ["Høyere låneramme", "Kan kompensere for lav inntekt", "Enklere å få innvilget lån"],
    cons: [
      "Medlåntaker er fullt ansvarlig for gjelden",
      "Påvirker medlåntakers egen lånekapasitet",
      "Kan skape familiekonflikter ved mislighold",
    ],
    eligibility: "Alle kan ha medlåntaker. Vanligst er foreldre, ektefelle eller samboer.",
    icon: "users",
  },
  {
    id: "realkausjonist",
    title: "Realkausjonist",
    description: "En person som stiller sin bolig som sikkerhet for ditt lån. Erstatter behovet for full egenkapital.",
    howItWorks: [
      "Kausjonisten stiller sin bolig som tilleggssikkerhet",
      "Banken får pant i kausjonistens bolig",
      "Du trenger mindre egenkapital (noen ganger 0%)",
      "Pantet kan slettes når du har betalt ned nok",
    ],
    pros: ["Kan kjøpe uten egenkapital", "Kausjonisten betaler ikke noe", "Midlertidig ordning som kan avsluttes"],
    cons: [
      "Kausjonistens bolig står som sikkerhet",
      "Risiko for kausjonisten ved mislighold",
      "Kausjonisten kan få problemer med egne lån",
    ],
    eligibility: "Kausjonisten må eie bolig med tilstrekkelig friverdi (typisk 15-20% av ditt lånebeløp).",
    icon: "home",
  },
]

export interface RateChange {
  bank: string
  date: string
  change: number // positiv = økning, negativ = reduksjon
  newRate: number
  announcement: string
}

export const rateChanges: RateChange[] = [
  {
    bank: "DNB",
    date: "2026-01-06",
    change: -0.15,
    newRate: 4.99,
    announcement: "DNB senker boliglånsrenten med 0,15 prosentpoeng",
  },
  {
    bank: "Nordea",
    date: "2026-01-03",
    change: -0.1,
    newRate: 4.85,
    announcement: "Nordea reduserer renten for eksisterende kunder",
  },
  {
    bank: "Bulder Bank",
    date: "2025-12-20",
    change: -0.2,
    newRate: 4.69,
    announcement: "Bulder Bank fortsetter rentekrigen med ny reduksjon",
  },
  {
    bank: "Sbanken",
    date: "2025-12-18",
    change: -0.1,
    newRate: 4.79,
    announcement: "Sbanken følger etter med rentekutt",
  },
  {
    bank: "SpareBank 1 SMN",
    date: "2025-12-15",
    change: -0.15,
    newRate: 4.78,
    announcement: "SpareBank 1 SMN senker renten for alle kunder",
  },
  {
    bank: "OBOS-banken",
    date: "2025-12-12",
    change: -0.12,
    newRate: 4.75,
    announcement: "OBOS-banken gir medlemmene bedre rente",
  },
  {
    bank: "Danske Bank",
    date: "2025-12-10",
    change: 0.05,
    newRate: 4.92,
    announcement: "Danske Bank justerer opp renten marginalt",
  },
  {
    bank: "Handelsbanken",
    date: "2025-12-08",
    change: -0.08,
    newRate: 4.89,
    announcement: "Handelsbanken senker boliglånsrenten",
  },
  {
    bank: "SpareBank 1 Hallingdal Valdres",
    date: "2025-12-05",
    change: -0.18,
    newRate: 4.74,
    announcement: "SpareBank 1 Hallingdal Valdres tilbyr markedets laveste rente",
  },
  {
    bank: "Kron",
    date: "2025-12-01",
    change: -0.1,
    newRate: 4.72,
    announcement: "Kron senker renten for kunder med høy egenkapital",
  },
]
