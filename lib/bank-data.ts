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
    id: "askim-spydeberg",
    name: "Askim & Spydeberg Sparebank",
    logo: "/askim-spydeberg-logo.jpg",
    nominalRate: 5.10,
    effectiveRate: 5.45,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Lokal sparebank",
      "Personlig rådgivning",
      "Gode betingelser ved lav belåning"
    ],
    url: "https://www.asbank.no/nb/om_oss/om_banken/prisliste",
    source: "Prisliste"
  },
  {
    id: "bien",
    name: "Bien Sparebank",
    logo: "/bien-logo.jpg",
    nominalRate: 5.09,
    effectiveRate: 5.25,
    maxLtv: 55,
    maxDebtRatio: 5,
    minEquity: 45,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Spesialisert på boliglån",
      "Digital og enkel prosess",
      "God for førstegangskjøpere"
    ],
    url: "https://www.bien.no/priser",
    source: "Prisliste"
  },
  {
    id: "bn-bank",
    name: "BN Bank ASA",
    logo: "/bn-bank-logo.jpg",
    nominalRate: 5.04,
    effectiveRate: 5.19,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Helhetlig digital bank",
      "Forutsigbare vilkår",
      "Konkurransedyktige renter"
    ],
    url: "https://www.bnbank.no/lan/prisliste-lan/",
    source: "Prisliste"
  },
  {
    id: "bulder",
    name: "Bulder Bank",
    logo: "/bulder-logo.jpg",
    nominalRate: 4.80,
    effectiveRate: 4.91,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Automatisk prising",
      "Fullt digital bank",
      "Ingen forhandling nødvendig"
    ],
    url: "https://www.bulder.no/priser/",
    source: "Prisliste"
  },
  {
    id: "dnb",
    name: "DNB",
    logo: "/dnb-logo.jpg",
    nominalRate: 5.59,
    effectiveRate: 5.77,
    maxLtv: 75,
    maxDebtRatio: 5,
    minEquity: 25,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Norges største bank",
      "Bredt produkttilbud",
      "Sterk digital løsning"
    ],
    url: "https://www.dnb.no/privat/lan/boliglan/priser-og-renter.html",
    source: "Prisliste"
  },
  {
    id: "fana",
    name: "Fana Sparebank",
    logo: "/fana-logo.jpg",
    nominalRate: 4.90,
    effectiveRate: 5.02,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Sterk lokal tilstedeværelse",
      "Personlig kundebehandling",
      "Konkurransedyktige lån"
    ],
    url: "https://www.fanasparebank.no/privat/prisliste/",
    source: "Prisliste"
  },
  {
    id: "handelsbanken",
    name: "Handelsbanken",
    logo: "/handelsbanken-logo.jpg",
    nominalRate: 5.50,
    effectiveRate: 5.72,
    maxLtv: 75,
    maxDebtRatio: 5,
    minEquity: 25,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Fast personlig rådgiver",
      "Langsiktig kundefokus",
      "Stabile betingelser"
    ],
    url: "https://www.handelsbanken.no/no/privat/boliglan/",
    source: "Prisliste"
  },
  {
    id: "jbf",
    name: "JBF",
    logo: "/jbf-logo.jpg",
    nominalRate: 5.20,
    effectiveRate: 5.37,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Medlemsbank",
      "Trygge og enkle produkter",
      "Stabil prising"
    ],
    url: "https://www.jbf.no/priser",
    source: "Prisliste"
  },
  {
    id: "klp",
    name: "KLP Banken AS",
    logo: "/klp-logo.jpg",
    nominalRate: 4.70,
    effectiveRate: 4.84,
    maxLtv: 55,
    maxDebtRatio: 5,
    minEquity: 45,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Svært lave renter",
      "Fordeler for offentlig ansatte",
      "Ingen provisjonsbasert salg"
    ],
    url: "https://www.klp.no/privat/lan/boliglan",
    source: "Prisliste"
  },
  {
    id: "landkreditt",
    name: "Landkreditt Bank AS",
    logo: "/landkreditt-logo.jpg",
    nominalRate: 4.74,
    effectiveRate: 4.85,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Solid medlemsbank",
      "God på eiendom og bolig",
      "Konkurransedyktig ved lav belåning"
    ],
    url: "https://www.landkredittbank.no/priser",
    source: "Prisliste"
  },
  {
    id: "nordea",
    name: "Nordea",
    logo: "/nordea-logo.jpg",
    nominalRate: 5.59,
    effectiveRate: 5.77,
    maxLtv: 75,
    maxDebtRatio: 5,
    minEquity: 25,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Nordisk storbank",
      "Avanserte digitale tjenester",
      "Helhetlig privatøkonomi"
    ],
    url: "https://www.nordea.no/privat/lane/boliglan/priser.html",
    source: "Prisliste"
  },
  {
    id: "nordirekte",
    name: "NORDirekte (Skagerrak Sparebank)",
    logo: "/nordirekte-logo.jpg",
    nominalRate: 4.68,
    effectiveRate: 4.82,
    maxLtv: 55,
    maxDebtRatio: 5,
    minEquity: 45,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Digital sparebank",
      "Lav kostnadsstruktur",
      "Gode renter uten forhandling"
    ],
    url: "https://www.skageraksparebank.no/privat/priser",
    source: "Prisliste"
  },
  {
    id: "nordnet",
    name: "Nordnet",
    logo: "/nordnet-logo.jpg",
    nominalRate: 5.49,
    effectiveRate: 5.63,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Høy maksimal belåning",
      "Sterk investeringsplattform",
      "Populær blant erfarne kunder"
    ],
    url: "https://www.nordnet.no/lan/boliglan",
    source: "Prisliste"
  },
  {
    id: "nybygger",
    name: "Nybygger.no (Sparebanken Øst)",
    logo: "/nybygger-logo.jpg",
    nominalRate: 4.71,
    effectiveRate: 4.81,
    maxLtv: 60,
    maxDebtRatio: 5,
    minEquity: 40,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Spesialisert på nybygg",
      "God belåningsgrad",
      "Digital søknadsprosess"
    ],
    url: "https://www.nybygger.no/priser",
    source: "Prisliste"
  },
  {
    id: "obos",
    name: "OBOS-banken",
    logo: "/obos-logo.jpg",
    nominalRate: 4.71,
    effectiveRate: 4.87,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Fordeler for OBOS-medlemmer",
      "Forutsigbare renter",
      "Fokus på boligkjøpere"
    ],
    url: "https://www.obos.no/privat/lan/boliglan/priser",
    source: "Prisliste"
  },
  {
    id: "penni",
    name: "Penni",
    logo: "/penni-logo.jpg",
    nominalRate: 4.75,
    effectiveRate: 4.86,
    maxLtv: 60,
    maxDebtRatio: 5,
    minEquity: 40,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Enkel og moderne bank",
      "Tydelig prising",
      "Digital kundereise"
    ],
    url: "https://www.penni.no",
    source: "Prisliste"
  },
  {
    id: "romerike",
    name: "Romerike Sparebank",
    logo: "/romerike-logo.jpg",
    nominalRate: 5.20,
    effectiveRate: 5.43,
    maxLtv: 55,
    maxDebtRatio: 5,
    minEquity: 45,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Sterk lokalbank",
      "Personlig rådgivning",
      "Langsiktig kundefokus"
    ],
    url: "https://www.romerikesparebank.no/priser",
    source: "Prisliste"
  },
  {
    id: "sbanken",
    name: "Sbanken",
    logo: "/sbanken-logo.jpg",
    nominalRate: 4.79,
    effectiveRate: 4.90,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Fullverdig digital bank",
      "Åpen og transparent prising",
      "Svært brukervennlig app"
    ],
    url: "https://www.sbanken.no/lan/boliglan/priser",
    source: "Prisliste"
  },
  {
    id: "sb1-gudbrandsdal",
    name: "SpareBank 1 Gudbrandsdal",
    logo: "/sb1-gudbrandsdal-logo.jpg",
    nominalRate: 4.95,
    effectiveRate: 5.12,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Sterk lokal SpareBank 1-bank",
      "Personlig rådgivning",
      "God kjennskap til lokalmarkedet"
    ],
    url: "https://www.sb1gd.no/privat/prisliste",
    source: "Prisliste"
  },
  {
    id: "sb1-nord-norge",
    name: "SpareBank 1 Nord-Norge",
    logo: "/sb1-nord-norge-logo.jpg",
    nominalRate: 5.25,
    effectiveRate: 5.46,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Sterk regional bank",
      "God lokal tilstedeværelse",
      "Bredt produkttilbud"
    ],
    url: "https://www.snn.no/privat/prisliste",
    source: "Prisliste"
  },
  {
    id: "sb1-smn",
    name: "SpareBank 1 SMN",
    logo: "/sb1-smn-logo.jpg",
    nominalRate: 5.04,
    effectiveRate: 5.24,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Sterk regional bank",
      "Personlig rådgiver",
      "God digital løsning"
    ],
    url: "https://www.smn.no/privat/prisliste",
    source: "Prisliste"
  },
  {
    id: "sb1-ostlandet",
    name: "SpareBank 1 Østlandet",
    logo: "/sb1-ostlandet-logo.jpg",
    nominalRate: 5.10,
    effectiveRate: 5.29,
    maxLtv: 50,
    maxDebtRatio: 5,
    minEquity: 50,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Stor regional sparebank",
      "Bredt tilbud til privatkunder",
      "God lokal tilstedeværelse"
    ],
    url: "https://www.sb1ostlandet.no/privat/prisliste",
    source: "Prisliste"
  },
  {
    id: "more",
    name: "Sparebanken Møre",
    logo: "/more-logo.jpg",
    nominalRate: 4.94,
    effectiveRate: 5.09,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Høy maksimal belåning",
      "Sterk lokalbank",
      "Personlig kundebehandling"
    ],
    url: "https://www.sbm.no/privat/prisliste",
    source: "Prisliste"
  },
  {
    id: "sparebanken-norge",
    name: "Sparebanken Norge",
    logo: "/sparebanken-norge-logo.jpg",
    nominalRate: 5.49,
    effectiveRate: 5.82,
    maxLtv: 90,
    maxDebtRatio: 5,
    minEquity: 10,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Høy belåningsgrad",
      "Sterk regional bank",
      "Bred produktportefølje"
    ],
    url: "https://www.sparebankennorge.no/priser",
    source: "Prisliste"
  },
  {
    id: "storebrand",
    name: "Storebrand Bank ASA",
    logo: "/storebrand-logo.jpg",
    nominalRate: 5.59,
    effectiveRate: 5.77,
    maxLtv: 70,
    maxDebtRatio: 5,
    minEquity: 30,
    processingFee: 0,
    establishmentFee: 0,
    features: [
      "Helhetlig økonomi og pensjon",
      "Stabil og solid bank",
      "Enkel digital løsning"
    ],
    url: "https://www.storebrand.no/privat/bank/priser",
    source: "Prisliste"
  }
];

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
    sourceUrl: "https://www.finansavisen.no/forum",
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

]
