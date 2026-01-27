import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"

export function MainHeader() {
  return (
    <header className="bg-secondary border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative rounded-xs overflow-hidden">
              <Image
                src="/logo.png"
                alt="Yachay Legends Logo"
                width={40}
                height={40}
                className="object-cover"
              />
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
