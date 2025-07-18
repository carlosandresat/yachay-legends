import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main className="container mx-auto px-4 py-8">
        <Button size="lg">Grupo A</Button>
        <Button size="lg">Grupo B</Button>
        <Button size="lg">Grupo C</Button>
        <Button size="lg">Grupo D</Button>
      </main>
    </div>
  )
}