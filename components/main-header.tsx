import { Trophy } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function MainHeader() {
  return (
    <header className="bg-secondary border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xs flex items-center justify-center">
              <Trophy className="w-6 h-6 text-background" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Yachay Legends</h1>
              <p className="text-sm text-secondary-foreground">Arena Edition</p>
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
