import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [username, setUsername] = useState()

  const changeUsername = (e) => {
    e.preventDefault()
    setUsername(e.target.usernameInput.value.toLowerCase())
  }

  useEffect(() => {
    console.log(`El usuario que se quiere buscar en github es: ${username}`)
  }, [username])

  return (
    <div className="h-screen font-be-vietnam-pro">
      <Header changeUsername={changeUsername} />
    </div>
  )
}

export default App
