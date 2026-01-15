import { TournamentView } from "@/components/tournament/tournament-view"
import { MainHeader } from "@/components/main-header"

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Resultados del Torneo de Arena</h1>
        <TournamentView />
      </main>
    </div>
  )
}