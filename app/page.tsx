import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LoanCalculator } from "@/components/loan-calculator"
import { BankComparison } from "@/components/bank-comparison"
import { ForumRates } from "@/components/forum-rates"
import { FinancingGuide } from "@/components/financing-guide"
import { DocumentsSection } from "@/components/documents-section"
import { AlternativePaths } from "@/components/alternative-paths"
import { Footer } from "@/components/footer"
import { RateNewsTicker } from "@/components/rate-news-ticker"

export default function Home() {
  return (
    <div className="min-h-screen">
      <RateNewsTicker />
      <Header />
      <main>
        <Hero />
        <LoanCalculator />
        <BankComparison />
        <ForumRates />
        <FinancingGuide />
        <DocumentsSection />
        <AlternativePaths />
      </main>
      <Footer />
    </div>
  )
}
