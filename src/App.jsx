import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hotel from './page/Hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hotel/>
    </>
  )
}

export default App
