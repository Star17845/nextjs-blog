import { Bold } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function BoldFont() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
