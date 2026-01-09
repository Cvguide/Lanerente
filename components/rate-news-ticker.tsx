"use client"

import { useEffect, useState } from "react"
import { rateChanges } from "@/lib/bank-data"
import { TrendingDown, TrendingUp, Newspaper } from "lucide-react"

export function RateNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Sorterer etter dato, nyeste først
  const sortedChanges = [...rateChanges].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sortedChanges.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [sortedChanges.length])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("nb-NO", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const currentChange = sortedChanges[currentIndex]

  return (
    <div className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-10 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0 mr-4 pr-4 border-r border-background/20">
            <Newspaper className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wider">Rentenyheter</span>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div
              className="flex items-center gap-3 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(0)` }}
            >
              <span className="text-xs text-background/70">{formatDate(currentChange.date)}</span>
              <span className="flex items-center gap-1.5">
                {currentChange.change < 0 ? (
                  <TrendingDown className="h-3.5 w-3.5 text-green-400" />
                ) : (
                  <TrendingUp className="h-3.5 w-3.5 text-red-400" />
                )}
                <span className="text-sm">{currentChange.announcement}</span>
              </span>
              <span
                className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                  currentChange.change < 0 ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
                }`}
              >
                {currentChange.change > 0 ? "+" : ""}
                {currentChange.change.toFixed(2)}%
              </span>
              <span className="text-xs text-background/70">Ny rente: {currentChange.newRate.toFixed(2)}%</span>
            </div>
          </div>

          <div className="flex gap-1 ml-4 shrink-0">
            {sortedChanges.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary" : "bg-background/30"
                }`}
                aria-label={`Gå til nyhet ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
