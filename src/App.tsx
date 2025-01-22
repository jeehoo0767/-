import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DilutionCalculator from "./component/DilutionCalculator.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DilutionCalculator />
    </div>
  )
}

export default App
