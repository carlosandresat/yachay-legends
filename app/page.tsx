import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 p-4">
      <ModeToggle />
      <Button size="lg">Grupo A</Button>
      <Button size="lg">Grupo B</Button>
      <Button size="lg">Grupo C</Button>
      <Button size="lg">Grupo D</Button>
    </div>
  )
}