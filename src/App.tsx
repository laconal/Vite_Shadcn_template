import { useState } from "react"
import { Button} from "./components/ui/button"
import { Badge } from "./components/ui/badge"

export default function App() {
  const [num, setNum] = useState<number>(0)

  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <Button onClick={() => setNum(num + 1)} className="aspect-square h-15">+</Button>
      <Badge className="aspect-square h-20 text-xl">{num}</Badge>
      <Button onClick={() => setNum(num - 1)} className="aspect-square h-15">-</Button>
    </div>
  )
}
