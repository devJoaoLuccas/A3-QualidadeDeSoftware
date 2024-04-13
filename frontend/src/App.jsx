import { useState } from 'react'
import LoginPage from './pages/Login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LoginPage />
    </>
  )
}

export default App
